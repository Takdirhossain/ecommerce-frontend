import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">ProSlider</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              At <span className="font-medium">AdornThemes</span>, we design and provide elegant and highly functional
              Shopify themes, backed by exceptional support
            </p>

            <div className="pt-2">
              <h3 className="text-sm font-medium text-foreground mb-3">Keep in touch</h3>
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm" className="p-2 h-auto">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button variant="ghost" size="sm" className="p-2 h-auto">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="ghost" size="sm" className="p-2 h-auto">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button variant="ghost" size="sm" className="p-2 h-auto">
                  <Youtube className="h-4 w-4" />
                  <span className="sr-only">YouTube</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div className="space-y-4">
            <h3 className="text-base font-medium text-foreground">Information</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Our Brands
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                My Account
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                My Orders
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Store Location
              </a>
            </nav>
          </div>

          {/* Customer Services Section */}
          <div className="space-y-4">
            <h3 className="text-base font-medium text-foreground">Customer Services</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Help & FAQs
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Returns Policy
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Support Center
              </a>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-base font-medium text-foreground">Newsletter</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enter your email to receive daily news and get 20% off coupon for all items. NO spam, we promise
            </p>

            <div className="space-y-3">
              <Input type="email" placeholder="Email address" className="bg-muted border-border" />
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
