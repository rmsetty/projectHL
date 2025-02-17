import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowRight, Shield, Users, BarChart2, Lock, CheckCircle, Brain, Share2 } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-2">
          <nav className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="RoomateMatch Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-bold text-lg">RoomateMatch@UTD</span>
            </Link>

            <div className="absolute left-1/2 transform -translate-x-1/2">
              <h1 className="font-bold text-5xl text-center">Meteor Mate</h1>
            </div>
            <ThemeToggle />
          </nav>
        </div>
      </header>
    
    

      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 bg-green-900">
          <div className="container mx-auto text-center max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect UTD Roommate Match</h1>
            <p className="text-lg text-muted-foreground text-white mb-8">
              Smart matching for UTD students using AI-powered compatibility analysis. Welcoming Class of 2029 and all
              UTD students!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Input type="email" placeholder="Enter your email" className="max-w-xs bg-green-900" />
              <Button size="lg" className="h-10 px-6 bg-orange-600 text-white" >
                Notify when ready
              </Button>
            </div>
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="relative rounded-lg overflow-hidden border border-border">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Dashboard Preview"
                width={800}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* Quick Solutions Section */}
        <section className="py-20 bg-orange-500">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Quick solutions, less stress</h2>
            <p className="text-muted-foreground-white text-center mb-12 max-w-2xl mx-auto">
              Find your ideal roommate match with our comprehensive platform designed specifically for UTD students.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI-Powered Matching</h3>
                <p className="text-muted-foreground-white">
                  Our advanced algorithm analyzes personality traits and preferences to find your ideal roommate match.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Verified UTD Students</h3>
                <p className="text-muted-foreground-white">
                  Every user is verified through their UTD email, ensuring a safe and trusted community.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Privacy First</h3>
                <p className="text-muted-foreground-white">
                  Your data is always protected. You control what information to share and who can see it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Instant Setup Section */}
        <section className="py-20 bg-green-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Instant setup, no hassle</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">UTD Email Integration</h3>
                    <p className="text-muted-foreground">
                      Sign up with your UTD email and get instant access to verified matches.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
                    <p className="text-muted-foreground">
                      Our AI analyzes your preferences to find compatible roommates.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <BarChart2 className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Compatibility Analytics</h3>
                    <p className="text-muted-foreground">View detailed compatibility scores and matching metrics.</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden border border-border">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BLOB_URL}/wjUZG.png`}
                  alt="Feature Preview"
                  width={800}
                  height={600}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-amber-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Our Features</h2>
            <p className="text-muted-foreground-white-center mb-12 max-w-2xl mx-auto">
              Comprehensive tools designed specifically for UTD students to find their perfect roommate match.
            </p>
            <div className="grid md:grid-cols-3 gap-8 cursor-pointer">
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-green-900 transform transition-transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI-Powered Matching</h3>
                <p className="text-muted-foreground">
                  Our advanced algorithm analyzes personality traits and preferences to find your ideal roommate match.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-green-900 transform transition-transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6">
                  <BarChart2 className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Data-Driven Insights</h3>
                <p className="text-muted-foreground">
                  View comprehensive compatibility metrics and compare potential roommates using interactive charts and
                  graphs.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-green-900 transform transition-transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Multi-Step Verification</h3>
                <p className="text-muted-foreground">
                  Secure system with UTD email and social media verification ensures all users are genuine UTD students.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-green-900 transform transition-transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Privacy First</h3>
                <p className="text-muted-foreground">
                  Your data is always protected. You control what information to share and who can see it.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-green-900 transform transition-transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Personalized Matching</h3>
                <p className="text-muted-foreground">
                  Tinder-style swiping interface with detailed profiles and compatibility scores makes finding your
                  roommate fun and intuitive.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-green-900 transform transition-transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6">
                  <Share2 className="w-6 h-6 text-indigo-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Social Integration</h3>
                <p className="text-muted-foreground">
                  Optional social media connection for enhanced matching and verification, especially welcoming Class of
                  2029!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-green-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Trusted by UTD Students</h2>
            <p className="text-muted-foreground text-center mb-12">
              Join thousands of students who found their perfect roommate match
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-secondary/50 p-8 rounded-lg border border-border">
                <p className="text-lg mb-6">
                  "The compatibility analytics really helped me find a roommate with similar habits and interests!"
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Sarah K."
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">Sarah K.</h4>
                    <p className="text-sm text-muted-foreground">Computer Science Major</p>
                  </div>
                </div>
              </div>
              <div className="bg-secondary/50 p-8 rounded-lg border border-border">
                <p className="text-lg mb-6">
                  "As an incoming freshman, I love how easy it is to connect with potential roommates who share my
                  interests."
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Michael R."
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">Michael R.</h4>
                    <p className="text-sm text-muted-foreground">Class of 2029</p>
                  </div>
                </div>
              </div>
              <div className="bg-secondary/50 p-8 rounded-lg border border-border">
                <p className="text-lg mb-6">
                  "The verification system made me feel safe, and the matching algorithm really works!"
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Jessica L."
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">Jessica L.</h4>
                    <p className="text-sm text-muted-foreground">Business Major</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
            <p className="text-muted-foreground mb-8">Book a demo or sign up now to find your perfect roommate match</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-12 px-8">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 bg-orange-600">
                Learn more
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background text-foreground border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="RoomateMatch Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="font-bold">RoomateMatch@UTD</span>
              </div>
              <p className="text-sm text-muted-foreground">Making roommate matching smarter for UTD students.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>AI Matching</li>
                <li>Social Integration</li>
                <li>Verification System</li>
                <li>Analytics Dashboard</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Help Center</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Data Protection</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>support@roomatematch.utd</li>
                <li>UTD Student Union</li>
                <li>Richardson, TX</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} RoomateMatch@UTD. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="#">Terms</Link>
              <Link href="#">Privacy</Link>
              <Link href="#">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

