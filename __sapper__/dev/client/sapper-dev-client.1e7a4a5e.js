let o;function e(e){!o&&window.EventSource&&(o=new EventSource(`http://${window.location.hostname}:${e}/__sapper__`),window.source=o,o.onopen=function(o){console.log("[SAPPER] dev client connected")},o.onerror=function(o){console.error(o)},o.onmessage=function(o){const e=JSON.parse(o.data);e&&("reload"===e.action&&window.location.reload(),"completed"===e.status&&"undefined"!=typeof module&&"idle"===module.hot.status()&&module.hot.check(!0).then(o=>{console.log("[SAPPER] applied HMR update")}))},window.addEventListener("beforeunload",function(){o.close()}))}export{e as connect};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FwcGVyLWRldi1jbGllbnQuMWU3YTRhNWUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXBwZXIvc2FwcGVyLWRldi1jbGllbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHNvdXJjZTtcblxuZnVuY3Rpb24gY2hlY2soKSB7XG5cdGlmICh0eXBlb2YgbW9kdWxlID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuXG5cdGlmIChtb2R1bGUuaG90LnN0YXR1cygpID09PSAnaWRsZScpIHtcblx0XHRtb2R1bGUuaG90LmNoZWNrKHRydWUpLnRoZW4obW9kdWxlcyA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhgW1NBUFBFUl0gYXBwbGllZCBITVIgdXBkYXRlYCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbm5lY3QocG9ydCkge1xuXHRpZiAoc291cmNlIHx8ICF3aW5kb3cuRXZlbnRTb3VyY2UpIHJldHVybjtcblxuXHRzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoYGh0dHA6Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZX06JHtwb3J0fS9fX3NhcHBlcl9fYCk7XG5cblx0d2luZG93LnNvdXJjZSA9IHNvdXJjZTtcblxuXHRzb3VyY2Uub25vcGVuID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRjb25zb2xlLmxvZyhgW1NBUFBFUl0gZGV2IGNsaWVudCBjb25uZWN0ZWRgKTtcblx0fTtcblxuXHRzb3VyY2Uub25lcnJvciA9IGZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdH07XG5cblx0c291cmNlLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0Y29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG5cdFx0aWYgKCFkYXRhKSByZXR1cm47IC8vIGp1c3QgYSBoZWFydGJlYXRcblxuXHRcdGlmIChkYXRhLmFjdGlvbiA9PT0gJ3JlbG9hZCcpIHtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHR9XG5cblx0XHRpZiAoZGF0YS5zdGF0dXMgPT09ICdjb21wbGV0ZWQnKSB7XG5cdFx0XHRjaGVjaygpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBDbG9zZSB0aGUgZXZlbnQgc291cmNlIGJlZm9yZSB0aGUgd2luZG93IGlzIHVubG9hZGVkIHRvIHByZXZlbnQgYW4gZXJyb3Jcblx0Ly8gKFwiVGhlIGNvbm5lY3Rpb24gd2FzIGludGVycnVwdGVkIHdoaWxlIHRoZSBwYWdlIHdhcyBsb2FkaW5nLlwiKSBpbiBGaXJlZm94XG5cdC8vIHdoZW4gdGhlIHBhZ2UgaXMgcmVsb2FkZWQuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBmdW5jdGlvbigpIHtcblx0XHRzb3VyY2UuY2xvc2UoKTtcblx0fSk7XG59XG4iXSwibmFtZXMiOlsic291cmNlIiwiY29ubmVjdCIsInBvcnQiLCJ3aW5kb3ciLCJFdmVudFNvdXJjZSIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJvbm9wZW4iLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJvbmVycm9yIiwiZXJyb3IiLCJvbm1lc3NhZ2UiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiYWN0aW9uIiwicmVsb2FkIiwic3RhdHVzIiwibW9kdWxlIiwiaG90IiwiY2hlY2siLCJ0aGVuIiwibW9kdWxlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsRUFZRyxTQUFTQyxFQUFRQyxJQUNuQkYsR0FBV0csT0FBT0MsY0FFdEJKLEVBQVMsSUFBSUksc0JBQXNCRCxPQUFPRSxTQUFTQyxZQUFZSixnQkFFL0RDLE9BQU9ILE9BQVNBLEVBRWhCQSxFQUFPTyxPQUFTLFNBQVNDLEdBQ3hCQyxRQUFRQyxJQUFJLGtDQUdiVixFQUFPVyxRQUFVLFNBQVNDLEdBQ3pCSCxRQUFRRyxNQUFNQSxJQUdmWixFQUFPYSxVQUFZLFNBQVNMLEdBQzNCLE1BQU1NLEVBQU9DLEtBQUtDLE1BQU1SLEVBQU1NLE1BQ3pCQSxJQUVlLFdBQWhCQSxFQUFLRyxRQUNSZCxPQUFPRSxTQUFTYSxTQUdHLGNBQWhCSixFQUFLSyxRQWhDWSxvQkFBWEMsUUFFaUIsU0FBeEJBLE9BQU9DLElBQUlGLFVBQ2RDLE9BQU9DLElBQUlDLE9BQU0sR0FBTUMsS0FBS0MsSUFDM0JmLFFBQVFDLElBQUksbUNBb0NkUCxPQUFPc0IsaUJBQWlCLGVBQWdCLFdBQ3ZDekIsRUFBTzBCIn0=