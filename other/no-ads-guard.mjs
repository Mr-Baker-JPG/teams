#!/usr/bin/env node
/**
 * No-Ads / No-Trackers Guard
 * Fails CI if known advertising or behavioral tracking libs are added
 * or if suspicious tracker snippets are found in source.
 */

import fs from 'node:fs'
import path from 'node:path'
import { globSync } from 'glob'

const repoRoot = process.cwd()
const pkgPath = path.join(repoRoot, 'package.json')
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))

// Package name substrings to block (case-insensitive)
const blockedPkgs = [
	// Analytics/ads
	'google-analytics',
	'react-ga',
	'react-ga4',
	'gtag',
	'@vercel/analytics',
	'segment',
	'analytics-node',
	'posthog',
	'mixpanel',
	'rudderstack',
	'amplitude',
	'hotjar',
	'clarity',
	'fullstory',
	'heap-analytics',
	'mouseflow',
	'intercom',
	'crisp-sdk-web',
	'drift-chat',
	'tawkto',
	'doubleclick',
	'adsense',
]

const blockedCodePatterns = [
	/gtag\s*\(/i,
	/window\.dataLayer/i,
	/adsbygoogle/i,
	/fbq\s*\(/i, // Facebook pixel
	/hotjar\(/i,
	/clarity\(/i,
	/mixpanel\./i,
	/posthog\./i,
	/amplitude\./i,
	/rudderanalytics\./i,
]

let violations = []

function checkDeps(record, kind) {
	if (!record) return
	for (const name of Object.keys(record)) {
		for (const needle of blockedPkgs) {
			if (name.toLowerCase().includes(needle)) {
				violations.push(`Blocked dependency in ${kind}: ${name}`)
			}
		}
	}
}

checkDeps(pkg.dependencies, 'dependencies')
checkDeps(pkg.devDependencies, 'devDependencies')

// Scan source files for tracker patterns (tsx, ts, js)
const files = globSync('{app,server,public}/**/*.{ts,tsx,js,jsx}', {
	cwd: repoRoot,
	dot: false,
	nodir: true,
})
for (const rel of files) {
	const abs = path.join(repoRoot, rel)
	try {
		const content = fs.readFileSync(abs, 'utf8')
		for (const re of blockedCodePatterns) {
			if (re.test(content)) {
				violations.push(`Blocked tracker pattern ${re} in ${rel}`)
			}
		}
	} catch {}
}

if (violations.length) {
	console.error('\nAd-Free Covenant guard failed:\n')
	for (const v of violations) console.error(' -', v)
	console.error('\nSee docs/ad-free-covenant.md for policy.')
	process.exit(1)
}

console.log('Ad-Free Covenant guard passed.')
