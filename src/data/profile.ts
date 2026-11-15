// Source: LinkedIn profile export (Profile.pdf), November 2026.
// Edit here to update the home and about pages.

export const profile = {
	name: 'Steven Seguinot Alvarez',
	shortName: 'Steven Seguinot',
	headline: 'Senior Security Engineer',
	tagline: 'Detection engineering · Security automation · Incident command',
	location: 'New York City Metropolitan Area',
	yearsExperience: 12,
	summary: [
		'Senior Security Engineer with 12 years of experience in cybersecurity, specializing in security automation, detection engineering, and incident command. I build and scale security operations that help organizations detect faster, respond smarter, and reduce operational friction.',
		'My background includes designing SOAR workflows, leveraging AI to enhance investigations and decision-making, and building detections informed by CISA KEV, threat intelligence, and exposure insights from ASPM. I focus on identifying what truly matters, determining whether the business is affected, and driving rapid remediation by bringing the right people into the process quickly.',
		'I’m especially passionate about building security programs that are efficient, resilient, and deeply aligned with real-world threat activity.',
	],
	focus: [
		{ title: 'Detection engineering', text: 'Detections driven by CISA KEV, threat intelligence, and ASPM exposure data.' },
		{ title: 'Security automation', text: 'SOAR workflows and AI-assisted investigations that cut response time.' },
		{ title: 'Incident command', text: 'Getting the right people in the room fast and driving remediation.' },
	],
	links: [
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/stevenseguinot' },
		{ label: 'GitHub', href: 'https://github.com/witchkingsteven' },
	],
	skills: ['Detection Engineering', 'Artificial Intelligence (AI)', 'Python'],
	languages: ['English', 'Spanish'],
	award: 'Splunk Boss of the SOC CTF — Winner',
	certifications: [
		'Astute Hunting in the Cloud — Bring the Thunder!',
		'Advanced Network Forensic Analysis',
		'Network IOC Identification & Investigation',
		'AWS Essentials',
		'HP ASE Advanced Analyst V1',
	],
	experience: [
		{
			company: 'Optro',
			roles: [
				{ title: 'Sr. Security Engineer I', dates: 'Mar 2026 – Present', location: 'New York City Metropolitan Area' },
				{ title: 'Security Engineer II', dates: 'Aug 2023 – Mar 2026', location: 'New York City Metropolitan Area' },
			],
		},
		{
			company: 'Unity',
			roles: [
				{ title: 'Senior Security Operations and Incident Response Analyst', dates: 'Jun 2022 – Aug 2023' },
				{ title: 'Security Operations and Incident Response Analyst', dates: 'Sep 2020 – Jul 2022', location: 'New York City Metropolitan Area' },
			],
		},
		{
			company: 'Teradata',
			roles: [
				{ title: 'Information Security Operations Lead', dates: 'Jul 2019 – Sep 2020', location: 'Greater San Diego Area' },
				{ title: 'Senior Information Security Analyst', dates: 'Dec 2018 – Jul 2019', location: 'San Diego, California' },
			],
		},
		{
			company: 'PlayStation',
			roles: [{ title: 'Cyber Security Analyst', dates: 'Sep 2016 – Dec 2018', location: 'San Diego, California' }],
		},
		{
			company: 'UnitedHealth Group',
			roles: [{ title: 'Information Security Analyst', dates: 'Sep 2015 – Sep 2016', location: 'Eden Prairie, Minnesota' }],
		},
		{
			company: 'Princeton University',
			roles: [{ title: 'Information Security Specialist Intern', dates: 'Jan 2015 – May 2015', location: 'Princeton, New Jersey' }],
		},
	],
	education: [
		{
			school: 'Mercer County Community College',
			degree: 'Associate’s Degree, Computer and Networking Technology',
			dates: '2013 – 2015',
		},
	],
} as const;
