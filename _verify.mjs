import { services, getServiceBySlug } from './lib/services.js';
const req=['no','slug','name','blurb','summary','time','modality','img','tags','facts','story','goodFor','boundaries','process','faqs'];
console.log('count:', services.length);
services.forEach(x=>{const m=req.filter(k=>!(k in x)); if(m.length) console.log('MISSING',x.slug,m);});
const sc=getServiceBySlug('scar-revision');
console.log('scar-revision:', !!sc, '| goodFor',sc.goodFor.length,'process',sc.process.length,'faqs',sc.faqs.length,'facts',sc.facts.length);
console.log('removed gone:', !getServiceBySlug('cryolipolysis') && !getServiceBySlug('hifu-vaginal-tightening'));
console.log('hifu-skin kept:', !!getServiceBySlug('hifu-skin-tightening'));
console.log('order:', services.map(x=>x.no+':'+x.slug).join(', '));
