// file for syncing the user who is logged in to create a user in the database

export type SyncUserPayload = {
	clerkId: string;
	email: string;
	name?: string;
};

export async function syncUser(payload: SyncUserPayload): Promise<{ ok: boolean; error?: string }> {
	try {
		const res = await fetch('/api/users/sync', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		credentials: 'include',
			cache: 'no-store',
			body: JSON.stringify(payload),
		});
		if (!res.ok) {
			const data = await res.json().catch(() => ({}));
			return { ok: false, error: data?.error || `HTTP ${res.status}` };
		}
		return { ok: true };
	} catch (e) {
		return { ok: false, error: (e as Error).message };
	}
}

