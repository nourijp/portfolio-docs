import { NextResponse } from "next/server";
export const dynamic = 'force-static';

const footerLink = [
    {
        title: "Project Docs",
        link: "/project-documentation"
    },
    {
        title: "Github",
        link: "/"
    },
    {
        title: "License",
        link: "/license"
    }
]


export const GET = async () => {
  return NextResponse.json({
    footerLink
  });
};