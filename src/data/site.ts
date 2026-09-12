export type NavItem = {
	label: string;
	href: string;
};

export type HomeLink = {
	label: string;
	href: string;
	external?: boolean;
};

export type SocialCard = {
	label: string;
	href: string;
	icon: "github" | "linkedin" | "mail" | "medium" | "instagram";
};

export type Moment = {
	title: string;
	image: string;
	top: string;
	right: string;
	rotate: number;
	imageClass?: string;
};

export type StackItem = {
	label: string;
	slug?: string;
};

export type StackGroup = {
	id: string;
	title: string;
	items: readonly StackItem[];
};

export const storage = {
	theme: "diri-theme",
} as const;

export const site = {
	url: "https://gue.is-a.dev",
	name: "Wahyu Pratama",
	handle: "wahyupratamaa",
	title: "wahyupratama",
	role: "Lead Software Engineer | Proprietary Trader",
	location: "Karawaci, Tangerang, Banten, Indonesia",
	description:
		"Lead Software Engineer at Siloam Hospitals Head Office. I own agentic procurement, the LLM underneath it, and the systems that have to hold on a Monday.",
	avatar: {
		src: "/avatar.jpg?v=linkedin",
		alt: "Wahyu Pratama",
		width: 100,
		height: 100,
	},
	nav: [
		{ label: "home", href: "/" },
		{ label: "about", href: "/about" },
	] satisfies NavItem[],
	home: {
		intro:
			"Hey, I'm Wahyu Pratama. Lead Software Engineer at Siloam Hospitals Head Office. I own internal systems that have to hold under real hospital load — procurement, agentic workflows, and the model layer underneath.",
		body: "At Siloam I took over the agentic procurement system, built the LLM from scratch, and own the apps around it. The work is type safety, clean contracts, and performance you can measure. I mentor at Harisenin. After hours I trade.",
	},
	homeLinks: [
		{
			label: "follow me on linkedin",
			href: "https://www.linkedin.com/in/wahyupratamaa/",
			external: true,
		},
		{
			label: "read me on medium",
			href: "https://medium.com/@wahyupratama_",
			external: true,
		},
	] satisfies HomeLink[],
	about: {
		subtitle: "Lead Software Engineer | Proprietary Trader · Based in Tangerang",
		paragraphs: [
			"I'm a **Lead Software Engineer** at **Siloam Hospitals Head Office**, Engineering and Technical. I was born in **West Sulawesi** and I work out of Tangerang. I own the internals that procurement and operations actually run — not a demo, the systems people open on a Monday.",
			"I took over the **agentic procurement** stack. I built the **LLM from scratch**, then the system apps that sit on it. The bar is senior and quiet: clean code, typed contracts, and performance you can defend in a review. If a state can mean three things, the model is not done.",
		],
		afterHr: [
			"I also **mentor at Harisenin**. Teaching uses the same standard I use at work — say the shape out loud, then make the code obey it.",
			"A day is fixed. **08:00–17:00** WFO or WFH at Siloam. **18:00–21:00** setup and trading. **22:00–00:00** learn. Then it repeats.",
		],
		stackLabel: "Stack",
		stackGroups: [
			{
				id: "01",
				title: "Frontend & Mobile",
				items: [
					{ label: "TypeScript", slug: "typescript" },
					{ label: "React", slug: "react" },
					{ label: "Next.js", slug: "nextdotjs" },
					{ label: "React Native", slug: "react" },
					{ label: "Expo", slug: "expo" },
					{ label: "Tailwind CSS", slug: "tailwindcss" },
					{ label: "Bootstrap", slug: "bootstrap" },
					{ label: "Zustand" },
					{ label: "Redux", slug: "redux" },
					{ label: "TanStack Query", slug: "reactquery" },
					{ label: "Framer Motion", slug: "framer" },
					{ label: "Vite", slug: "vite" },
					{ label: "Shadcn UI", slug: "shadcnui" },
					{ label: "Material UI", slug: "mui" },
					{ label: "Ant Design", slug: "antdesign" },
					{ label: "Astro", slug: "astro" },
				],
			},
			{
				id: "02",
				title: "Backend & Databases",
				items: [
					{ label: "Node.js", slug: "nodedotjs" },
					{ label: "Bun", slug: "bun" },
					{ label: "Express.js", slug: "express" },
					{ label: "Fastify", slug: "fastify" },
					{ label: "NestJS", slug: "nestjs" },
					{ label: "Laravel", slug: "laravel" },
					{ label: "PostgreSQL", slug: "postgresql" },
					{ label: "MySQL", slug: "mysql" },
					{ label: "MongoDB", slug: "mongodb" },
					{ label: "Redis", slug: "redis" },
					{ label: "Prisma", slug: "prisma" },
					{ label: "Drizzle", slug: "drizzle" },
					{ label: "Supabase", slug: "supabase" },
					{ label: "NextAuth" },
					{ label: "BetterAuth", slug: "betterauth" },
				],
			},
			{
				id: "03",
				title: "General Tooling & Infrastructure",
				items: [
					{ label: "Git", slug: "git" },
					{ label: "GitHub", slug: "github" },
					{ label: "Docker", slug: "docker" },
					{ label: "AWS" },
					{ label: "Google Cloud", slug: "googlecloud" },
					{ label: "Nginx", slug: "nginx" },
					{ label: "Cloudflare", slug: "cloudflare" },
					{ label: "GitHub Actions", slug: "githubactions" },
					{ label: "pnpm", slug: "pnpm" },
					{ label: "Vercel", slug: "vercel" },
					{ label: "Figma", slug: "figma" },
					{ label: "Xendit", slug: "xendit" },
					{ label: "Midtrans" },
					{ label: "Doku" },
				],
			},
			{
				id: "04",
				title: "AI & Agentic Coding",
				items: [
					{ label: "OpenAI" },
					{ label: "Claude", slug: "claude" },
					{ label: "Ollama", slug: "ollama" },
					{ label: "Cursor", slug: "cursor" },
					{ label: "Codex" },
					{ label: "Hermes Agent", slug: "hermes" },
					{ label: "OpenClaw" },
				],
			},
		] satisfies StackGroup[],
	},
	socials: [
		{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/wahyupratamaa/",
			icon: "linkedin",
		},
		{
			label: "Medium",
			href: "https://medium.com/@wahyupratama_",
			icon: "medium",
		},
		{
			label: "Instagram",
			href: "https://www.instagram.com/alvprma.cn/",
			icon: "instagram",
		},
	] satisfies SocialCard[],
	moments: {
		title: "On the table",
		caption: "Drag a card. They bounce when they hit the edge.",
		items: [
			{
				title: "Siloam",
				image: "/moments/siloam.jpg",
				top: "10vh",
				right: "3vw",
				rotate: -6,
				imageClass: "object-bottom",
			},
			{
				title: "Team",
				image: "/moments/team.jpg",
				top: "38vh",
				right: "2vw",
				rotate: 7,
				imageClass: "object-[center_72%]",
			},
			{
				title: "AWS",
				image: "/moments/aws.jpg",
				top: "66vh",
				right: "4vw",
				rotate: -4,
			},
		] satisfies Moment[],
	},
} as const;

export type Site = typeof site;

export function isActivePath(href: string, pathname: string) {
	if (href === "/") return pathname === "/";
	return pathname === href || pathname.startsWith(`${href}/`);
}
