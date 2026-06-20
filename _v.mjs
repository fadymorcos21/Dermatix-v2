import { services, getServiceBySlug } from './lib/services.js';
console.log('count', services.length, '| scar img:', getServiceBySlug('scar-revision').img);
