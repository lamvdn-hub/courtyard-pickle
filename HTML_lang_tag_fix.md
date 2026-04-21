In app/layout.tsx, the <html> tag currently has a hardcoded lang="en" 
attribute. This needs to be dynamic based on the lang search parameter.

The rules are:
- If lang=en: <html lang="en">
- If lang=vi: <html lang="vi">
- If no lang param (bare domain, default): <html lang="vi">

The default language of the site is Vietnamese, so the fallback must 
be "vi" not "en".

Please check how the lang search parameter is currently being read 
(it should already be handled in the generateMetadata function in 
app/page.tsx), and use the same approach to make the <html> lang 
attribute dynamic.

After implementing, verify by viewing page source on all three URLs:
- https://courtyardpickledanang.com → should show <html lang="vi">
- https://courtyardpickledanang.com/?lang=vi → should show <html lang="vi">
- https://courtyardpickledanang.com/?lang=en → should show <html lang="en">
