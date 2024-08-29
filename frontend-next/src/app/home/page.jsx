"use client";

import React from "react";
import "@/app/home/home.css";
import { ThreeDCardDemo } from "../components/democard";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-black text-white px-4 py-3 sm:px-6 md:py-4">
        <div className="container mx-auto flex max-w-7xl items-center justify-between">
          <a className="flex items-center gap-2" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            </svg>
            <span className="text-lg font-semibold">copypaste.me</span>
          </a>
          <nav className="hidden space-x-4 md:flex">
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#"
            >
              Features
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#"
            >
              Pricing
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#"
            >
              About
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-r from-gray-900 to-gray-400 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-3xl font-bold text-background sm:text-4xl md:text-5xl">
                Securely share anything, anywhere.
              </h1>
              <p className="mt-4 text-lg text-background/80 sm:text-xl">
                Easily share text, passwords, files, and folders with your team
                or clients.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-black">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                Get started with copypaste.me
              </h2>
              <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
                Start sharing securely today.
              </p>
              <Link
                className="mt-8 inline-flex items-center justify-center rounded-md bg-black text-white px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                href="/connect"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-black ">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 ">
            <div className="mx-auto  ">
              <div className="flex  gap-4 flex-shrink-0 flex-wrap">
                <div className=" ">
                  <CardContainer className="inter-var">
                    <CardBody className="flex flex-col  items-center bg-slate-200 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem] h-auto rounded-xl p-6 border ">
                      <CardItem translateZ="50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-12 w-12 text-primary"
                        >
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                      </CardItem>
                      <CardItem
                        translateZ="20"
                        className="mt-4 text-xl font-semibold"
                      >
                        Connect with a code
                      </CardItem>
                      <CardItem
                        translateZ="20"
                        className="mt-2 text-muted-foreground"
                      >
                        Share a unique code to connect with others and start
                        collaborating.
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </div>

                <div className="flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-12 w-12 text-primary"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  <h3 className="mt-4 text-xl font-semibold">Share content</h3>
                  <p className="mt-2 text-muted-foreground">
                    Easily upload and share text, passwords, files, and folders
                    with your team or clients.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-12 w-12 text-primary"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <h3 className="mt-4 text-xl font-semibold">
                    Access shared content
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Access the shared content securely and efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <ThreeDCardDemo />
          </div>
        </section>
      </main>
      <footer className="bg-muted-foreground py-6 text-muted border-t">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-4">
              <a className="flex items-center gap-2" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                </svg>
                <span className="text-sm font-medium">copypaste.me</span>
              </a>
              <nav className="hidden space-x-4 md:flex">
                <a
                  className="text-sm font-medium transition-colors hover:text-primary"
                  href="#"
                >
                  Privacy Policy
                </a>
                <a
                  className="text-sm font-medium transition-colors hover:text-primary"
                  href="#"
                >
                  Terms of Service
                </a>
              </nav>
            </div>
            <p className="text-sm">© 2024 copypaste.me. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
