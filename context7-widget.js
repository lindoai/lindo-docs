/**
 * Context7 AI chat widget loader.
 *
 * Mintlify auto-includes any .js file in the content directory on every
 * page, which is the equivalent of a <script> tag in every page. This file
 * injects the Context7 widget script so the floating chat assistant renders
 * across the whole documentation site.
 *
 * Docs: https://context7.com
 */
(function loadContext7Widget() {
  if (typeof document === 'undefined') return;

  // Avoid loading the widget more than once when client-side navigation occurs.
  if (document.getElementById('context7-widget-script')) return;

  var script = document.createElement('script');
  script.id = 'context7-widget-script';
  script.src = 'https://context7.com/widget.js';
  script.async = true;
  script.setAttribute('data-library', '/lindoai/lindo-docs');
  // Optional attributes (uncomment to customize):
  // script.setAttribute('data-color', '#059669');
  // script.setAttribute('data-position', 'bottom-right');
  // script.setAttribute('data-placeholder', 'Ask Lindo docs anything...');

  (document.head || document.documentElement).appendChild(script);
})();
