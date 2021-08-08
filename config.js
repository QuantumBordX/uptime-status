// Configuration
window.Config = {

  // Site Name
  SiteName: 'Uptime Status',

  // Site URL
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // Support both Monitor-Specific and  Read-Only type's Api Key
  ApiKeys: [
        'm788895134-d5f6a22da8ff5c872a5c9861'
  ],

  // if shows monitored site's URL
  ShowLink: false,

  // Show how many days of log. 
  // API can have 90 days, although free plan says only for 60 days.
  // 60 is a good number for log days. 
  CountDays: 90,

  // Navigation menu at top right. 
  Navi: [
    {
      text: 'Homepage',
      url: 'https://51sec.org/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/51sec/uptime-status'
    }
  ]
};
