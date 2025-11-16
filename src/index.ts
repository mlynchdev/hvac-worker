/**
 * HVAC/Ventilation Worksheet Worker
 * Serves static HTML from the public directory
 */

export default {
	async fetch(request, env, ctx): Promise<Response> {
		// The assets configuration in wrangler.jsonc will automatically serve
		// files from the public directory, including index.html at the root
		return env.ASSETS.fetch(request);
	},
} satisfies ExportedHandler<Env>;
