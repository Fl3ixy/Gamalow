"use client";

import { useState } from "react";
import React from "react";
import {
  Mail,
  MessageSquare,
  Twitter,
  Github,
  MapPin,
  Clock,
  Send,
  Box,
  Instagram,
} from "lucide-react";
import Image from "next/image";

const ContactPage = () => {

  const socialLinks = [
    {
      icon: MessageSquare,
      name: "Discord",
      handle: "@gamalow",
      description: "Real-time chat for quick discussions",
    },
    {
      icon: Twitter,
      name: "X (Twitter)",
      handle: "@GamaLow_Off",
      url: "https://x.com/GamaLow_Off",
      description: "Follow my creations and news",
    },
    {
      icon: Instagram,
      name: "instagram",
      handle: "@instagram",
      url: "https://www.instagram.com/3d.work.andy/",
      description: "See more creations ",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 isometric-grid relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="rounded-2xl relative">
              <div className="w-32 h-32 relative">
                <div className="w-full h-full relative">
                  <div className="cube-3d w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl shadow-2xl overflow-hidden">
                    <Image
                      src="/Pictures/Phone.png"
                      alt="Alex Vortex Logo"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 font-orbitron">
            <span className="text-yellow-400 drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]">
              CONTACT
            </span>
            <br />
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
              ME !
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Contact me to discuss your
            project and receive personalized feedback as quickly as possible !
          </p>

          {/* Quick Contact */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a href="mailto:gamalow32@gmail.com" className="group">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 px-8 py-4 rounded-lg flex items-center space-x-3 text-lg font-semibold text-white hover:scale-105 duration-300">
                <Mail className="h-6 w-6" />
                <span>Send Mail</span>
              </button>
            </a>

            <h1 className="bolt-card px-8 py-4 rounded-lg text-lg font-semibold hover:bg-zinc-700/50 transition-all duration-300 flex items-center space-x-3 text-white hover:scale-105 duration-300">
              <MessageSquare className="h-6 w-6 text-yellow-400" />
              <span>@Gamalow</span>
            </h1>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bolt-card p-6 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="viewport-grid w-full h-full rounded-2xl"></div>
              </div>
              <div className="relative z-10 hover:scale-105 duration-300">
                <Clock className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-lg font-semibold mb-2">Quick response</div>
                <div className="text-sm text-gray-400">
                  Within 48 hours guaranteed
                </div>
              </div>
            </div>
            <div className="bolt-card p-6 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="viewport-grid w-full h-full rounded-2xl"></div>
              </div>
              <div className="relative z-10 hover:scale-105 duration-300">
                <MapPin className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-lg font-semibold mb-2">
                  Remote Friendly
                </div>
                <div className="text-sm text-gray-400">
                  International collaboration
                </div>
              </div>
            </div>
            <div className="bolt-card p-6 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="viewport-grid w-full h-full rounded-2xl"></div>
              </div>
              <div className="relative z-10 hover:scale-105 duration-300">
                <Send className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-lg font-semibold mb-2">Collaboration</div>
                <div className="text-sm text-gray-400">Contact me</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Social */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              {/* Professional Brief Guidelines */}
              <div className="bolt-card rounded-3xl p-8 relative overflow-hidden hover:scale-105 duration-300">
                <div className="relative z-10">
                  <h2 className="text-2xl font-black mb-6 drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]">
                    <span className="text-yellow-400">PROFESSIONAL</span> ADVICE
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bolt-card p-2 rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold text-yellow-400">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">
                          Be Specific and Detailed
                        </h4>
                        <p className="text-sm text-gray-400">
                          The more detailed your brief, the more accurate the
                          quote will be. Include your visual references,
                          technical constraints, and objectives.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bolt-card p-2 rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold text-yellow-400">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">
                          Realistic Budget
                        </h4>
                        <p className="text-sm text-gray-400">
                          Please indicate your approximate budget. This will
                          help me provide the best solution within your budget.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bolt-card p-2 rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold text-yellow-400">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">
                          Flexible Timeline
                        </h4>
                        <p className="text-sm text-gray-400">
                          Quality takes time. Plan realistic deadlines for
                          exceptional work.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bolt-card p-2 rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold text-orange-400">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">
                          Professional Communication
                        </h4>
                        <p className="text-sm text-gray-400">
                          A well-structured email with your complete contact
                          information facilitates our collaboration.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bolt-card rounded-lg border-l-4 border-yellow-400">
                    <p className="text-sm text-gray-300">
                      <span className="font-semibold text-yellow-400">
                        💡 Tip:
                      </span>
                      Projects with detailed and professional briefs are given
                      priority and often benefit from preferential rates.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bolt-card rounded-3xl p-4 relative overflow-hidden hover:scale-105 duration-300">
                <div className="relative z-10 text-center">
                  <h2 className="text-4xl font-black mb-8 drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]">
                    <span className="text-yellow-400">BRIEF </span>YOUR PROJECT
                  </h2>

                  <div className="text-center space-y-8">
                    <div className="bolt-card p-8 rounded-2xl">
                      <h3 className="text-2xl font-bold mb-4 text-white">
                        Ready to start your project?
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        Contact me directly by email with the details of your
                        project. I&apos;ll respond within 48 hours with a
                        personalized quote!
                      </p>

                      <div className="space-y-4 text-left text-sm text-gray-400 mb-8">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                          <div>
                            <strong className="text-white">
                              Project type:
                            </strong>{" "}
                            3D Model, Environment, Character, etc.
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                          <div>
                            <strong className="text-white">
                              Estimated budget:
                            </strong>{" "}
                            Your budget range
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                          <div>
                            <strong className="text-white">Timeline :</strong>{" "}
                            Desired delivery time
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                          <div>
                            <strong className="text-white">
                              Description :
                            </strong>{" "}
                            Vision, references, technical constraints
                          </div>
                        </div>
                      </div>

                      <a
                        href="mailto:gamalow32@gmail.com"
                        className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 px-8 py-4 rounded-lg text-lg font-semibold text-white flex items-center justify-center hover:scale-105 duration-300 space-x-3 group"
                      >
                        <Send className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                        <span>Send the Brief by Email</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-8">
              <h2 className="text-3xl font-black mb-8 drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]">
                <span className="text-yellow-400">NETWORKS</span> & COMMUNITY
              </h2>

              <div className="space-y-6 mb-12">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bolt-card p-6 rounded-2xl flex items-center space-x-4 group relative overflow-hidden hover:bg-zinc-800/50 hover:scale-105 duration-300"
                    >
                      <div className="bolt-card p-4 rounded-2xl relative z-10">
                        <Icon className="h-8 w-8 text-yellow-400 group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="flex-1 relative z-10">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {social.name}
                        </h3>
                        <p className="text-yellow-400 font-semibold mb-1">
                          {social.handle}
                        </p>
                        <p className="text-sm text-gray-400">
                          {social.description}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
              {/* Additional Info */}
              <div className="bolt-card rounded-2xl p-8 relative overflow-hidden hover:scale-105 duration-300">
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold mb-6 text-center drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]">
                    <span className="text-yellow-400">PROCESS</span>{" "}
                    COLLABORATIVE
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bolt-card p-2 rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold text-yellow-400">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          Brief & Analysis
                        </h4>
                        <p className="text-sm text-gray-400">
                          Detailed discussion of your needs
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bolt-card p-2 rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold text-yellow-400">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          Concepts & Validation
                        </h4>
                        <p className="text-sm text-gray-400">
                          Presentation of the first concepts
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bolt-card p-2 rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold text-yellow-400">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          Production & Updates
                        </h4>
                        <p className="text-sm text-gray-400">
                          Creation with daily monitoring
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bolt-card p-2 rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold text-yellow-400">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          Delivery & Support
                        </h4>
                        <p className="text-sm text-gray-400">
                          Final files + documentation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;