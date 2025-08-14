import { defineBddConfig } from 'playwright-bdd';
import { defineConfig, devices } from '@playwright/test'

const testDir = defineBddConfig({
	features: 'Features/**/*.feature',
	steps: ['Steps/**/*.ts', 'fixtures/**/*.ts'],
	outputDir: 'Test',
});

export const workers = process.env.WORKERS || 4;

export default defineConfig({
	testDir: testDir,
	fullyParallel: true,
	workers: workers,
	use: {
		headless: false,
		trace: "retain-on-failure",
		screenshot: "on",
		video: "retain-on-failure"
	},
	reporter: [
    ['html', { open: 'never' }],
	],
	projects: [
		{
			name: 'Google Chrome',
			use: {
				...devices['Desktop Chrome'],
				channel: 'chrome',
			}
		}
	]
});
