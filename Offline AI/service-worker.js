/**
 * VITALGUARD SERVICE WORKER v0.3
 * 
 * PURPOSE:
 * - Enable offline functionality
 * - Cache app resources for instant loading
 * - Provide PWA installation support
 * 
 * SECURITY CONSIDERATIONS:
 * - No sensitive data cached
 * - Cache can be cleared via emergency delete
 * - All crypto operations happen in main thread
 */

const CACHE_NAME = 'luckyvicky-v0.3';
const CRITICAL_RESOURCES = [
    './VitalGuard_v0.3.html',
    './manifest.json'
];

/**
 * INSTALL EVENT
 * Triggered when service worker is first installed
 */
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing v0.3');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Caching critical resources');
                return cache.addAll(CRITICAL_RESOURCES);
            })
            .then(() => {
                // Force immediate activation
                return self.skipWaiting();
            })
            .catch((error) => {
                console.error('[Service Worker] Installation failed:', error);
            })
    );
});

/**
 * ACTIVATE EVENT
 * Clean up old caches
 */
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating v0.3');
    
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== CACHE_NAME) {
                            console.log('[Service Worker] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                // Claim all clients immediately
                return self.clients.claim();
            })
    );
});

/**
 * FETCH EVENT
 * Serve from cache when offline, network when online
 * 
 * STRATEGY: Network First, Cache Fallback
 * - Always try network first (fresh data)
 * - Fall back to cache if network fails
 * - Cache network responses for future offline use
 */
self.addEventListener('fetch', (event) => {
    // Only handle same-origin requests
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }
    
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // Clone response before caching
                const responseToCache = response.clone();
                
                caches.open(CACHE_NAME)
                    .then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                
                return response;
            })
            .catch(() => {
                // Network failed, try cache
                return caches.match(event.request)
                    .then((response) => {
                        if (response) {
                            console.log('[Service Worker] Serving from cache:', event.request.url);
                            return response;
                        }
                        
                        // Not in cache either, return offline page
                        return new Response(
                            '<h1>Offline</h1><p>Please check your internet connection.</p>',
                            {
                                headers: { 'Content-Type': 'text/html' }
                            }
                        );
                    });
            })
    );
});

/**
 * MESSAGE EVENT
 * Handle commands from main app
 */
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'EMERGENCY_CLEAR') {
        // Emergency: Clear all caches
        console.log('[Service Worker] EMERGENCY CLEAR triggered');
        
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => caches.delete(cacheName))
                );
            })
            .then(() => {
                console.log('[Service Worker] All caches cleared');
                
                // Notify all clients
                self.clients.matchAll().then((clients) => {
                    clients.forEach((client) => {
                        client.postMessage({
                            type: 'CACHE_CLEARED',
                            timestamp: Date.now()
                        });
                    });
                });
            });
    }
    
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

/**
 * SYNC EVENT (Background Sync API)
 * V0.3: Placeholder for future background sync features
 */
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-data') {
        event.waitUntil(
            // Future: Sync encrypted data when connection restored
            Promise.resolve()
        );
    }
});

/**
 * PUSH EVENT (Push Notifications)
 * V0.3: Not implemented for security reasons
 * - Notifications could reveal app usage patterns
 * - Avoid any external communication
 */
self.addEventListener('push', (event) => {
    // Intentionally not implemented
    console.log('[Service Worker] Push notifications disabled for security');
});

/**
 * PERIODIC BACKGROUND SYNC
 * V0.3: Not implemented for security reasons
 */
self.addEventListener('periodicsync', (event) => {
    // Intentionally not implemented
    console.log('[Service Worker] Periodic sync disabled for security');
});

/**
 * TECHNICAL NOTES FOR OTF DOCUMENTATION
 * 
 * WHAT THIS SERVICE WORKER DOES:
 * ✅ Enables offline functionality
 * ✅ Caches app resources
 * ✅ Provides PWA installation
 * ✅ Can clear cache on emergency command
 * 
 * WHAT IT DOESN'T DO (SECURITY):
 * ❌ No push notifications (avoid tracking)
 * ❌ No background sync (avoid network traces)
 * ❌ No sensitive data caching
 * ❌ No external API calls
 * 
 * LIMITATIONS:
 * - Service worker itself can be discovered
 * - Cache contents can be inspected
 * - Network requests still visible to ISP/government
 * - This is NOT a privacy layer, just offline support
 * 
 * RECOMMENDATION:
 * - Use with VPN/Tor for network privacy
 * - Emergency delete also clears service worker cache
 * - PWA installation improves UX but doesn't hide app
 */
