import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Send } from "lucide-react"
import Link from "next/link"

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-balance mb-4">
              Get Your <span className="text-primary">Free Quote</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              Tell us about your HVAC and clean room requirements, and we'll provide you with a detailed quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quote Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form className="space-y-6">
                    {/* Contact Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="Enter your first name" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Enter your last name" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="your.email@company.com" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input id="company" placeholder="Your company name" required />
                    </div>

                    {/* Project Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="industry">Industry *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pharmaceutical">Pharmaceutical</SelectItem>
                            <SelectItem value="biotechnology">Biotechnology</SelectItem>
                            <SelectItem value="hospital">Hospital/Healthcare</SelectItem>
                            <SelectItem value="food">Food Production</SelectItem>
                            <SelectItem value="research">Research & Development</SelectItem>
                            <SelectItem value="automotive">Automotive</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="projectType">Project Type *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new-installation">New Installation</SelectItem>
                            <SelectItem value="upgrade">System Upgrade</SelectItem>
                            <SelectItem value="maintenance">Maintenance</SelectItem>
                            <SelectItem value="consultation">Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Products/Services */}
                    <div>
                      <Label className="text-base font-medium mb-4 block">Products/Services Required *</Label>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          "Air Handling Unit (AHU)",
                          "Dehumidifier (DHU)",
                          "Clean Room Panels",
                          "Clean Room Doors",
                          "HEPA Filters",
                          "Air Shower",
                          "Pass Box",
                          "Laminar Air Flow",
                          "Bio Safety Cabinet",
                          "HVAC Ducting",
                        ].map((product) => (
                          <div key={product} className="flex items-center space-x-2">
                            <Checkbox id={product.toLowerCase().replace(/\s+/g, "-")} />
                            <Label htmlFor={product.toLowerCase().replace(/\s+/g, "-")} className="text-sm">
                              {product}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="area">Area Size (sq ft)</Label>
                        <Input id="area" placeholder="e.g., 1000" />
                      </div>
                      <div>
                        <Label htmlFor="timeline">Project Timeline</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Immediate (Within 1 month)</SelectItem>
                            <SelectItem value="short">Short term (1-3 months)</SelectItem>
                            <SelectItem value="medium">Medium term (3-6 months)</SelectItem>
                            <SelectItem value="long">Long term (6+ months)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="requirements">Detailed Requirements</Label>
                      <Textarea
                        id="requirements"
                        placeholder="Please describe your specific requirements, clean room class needed, temperature/humidity specifications, etc."
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label htmlFor="budget">Budget Range (Optional)</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5">Under ₹5 Lakhs</SelectItem>
                          <SelectItem value="5-10">₹5-10 Lakhs</SelectItem>
                          <SelectItem value="10-25">₹10-25 Lakhs</SelectItem>
                          <SelectItem value="25-50">₹25-50 Lakhs</SelectItem>
                          <SelectItem value="50-100">₹50 Lakhs - ₹1 Crore</SelectItem>
                          <SelectItem value="above-100">Above ₹1 Crore</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Submit Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Phone</h4>
                    <p className="text-muted-foreground">+91 7201872788</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Email</h4>
                    <p className="text-muted-foreground">info@avivaindustries.in</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Website</h4>
                    <p className="text-muted-foreground">www.avivaindustries.in</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Address</h4>
                    <p className="text-muted-foreground text-sm">
                      Survey No. 257/16, Daman Industrial Estate
                      <br />
                      Near Fire Station Somnath Kachigam
                      <br />
                      Daman 396210
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Review</h4>
                      <p className="text-sm text-muted-foreground">We'll review your requirements within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Consultation</h4>
                      <p className="text-sm text-muted-foreground">Schedule a technical consultation call</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Quote</h4>
                      <p className="text-sm text-muted-foreground">Receive detailed quote with specifications</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
