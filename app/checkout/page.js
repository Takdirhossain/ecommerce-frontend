"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Check, ChevronsUpDown, CreditCard, Lock, Shield, Truck } from "lucide-react";
import Navbar from "@/components/common/Navbar";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { productStore } from "@/store/useStore";
import { getImageUrl } from "@/config/config";
import Image from "next/image";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export default function CheckoutPage() {
  const { products } = productStore();
  const [step, setStep] = useState(1);
  const [createAccount, setCreateAccount] = useState(false)
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("dhaka")
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
    password: ""
  });
  console.log(products)

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };



  const subtotal = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 15.0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;


  const districts = [
    { value: "bagerhat", label: "Bagerhat" },
    { value: "bandarban", label: "Bandarban" },
    { value: "barguna", label: "Barguna" },
    { value: "barishal", label: "Barishal" },
    { value: "bhola", label: "Bhola" },
    { value: "bogura", label: "Bogura" },
    { value: "brahmanbaria", label: "Brahmanbaria" },
    { value: "chandpur", label: "Chandpur" },
    { value: "chattogram", label: "Chattogram" },
    { value: "chuadanga", label: "Chuadanga" },
    { value: "coxsbazar", label: "Cox's Bazar" },
    { value: "cumilla", label: "Cumilla" },
    { value: "dhaka", label: "Dhaka" },
    { value: "dinajpur", label: "Dinajpur" },
    { value: "faridpur", label: "Faridpur" },
    { value: "feni", label: "Feni" },
    { value: "gaibandha", label: "Gaibandha" },
    { value: "gazipur", label: "Gazipur" },
    { value: "gopalganj", label: "Gopalganj" },
    { value: "habiganj", label: "Habiganj" },
    { value: "jamalpur", label: "Jamalpur" },
    { value: "jashore", label: "Jashore" },
    { value: "jhalokati", label: "Jhalokati" },
    { value: "jhenaidah", label: "Jhenaidah" },
    { value: "joypurhat", label: "Joypurhat" },
    { value: "khagrachari", label: "Khagrachari" },
    { value: "khulna", label: "Khulna" },
    { value: "kishoreganj", label: "Kishoreganj" },
    { value: "kurigram", label: "Kurigram" },
    { value: "kushtia", label: "Kushtia" },
    { value: "lakshmipur", label: "Lakshmipur" },
    { value: "lalmonirhat", label: "Lalmonirhat" },
    { value: "madaripur", label: "Madaripur" },
    { value: "magura", label: "Magura" },
    { value: "manikganj", label: "Manikganj" },
    { value: "meherpur", label: "Meherpur" },
    { value: "moulvibazar", label: "Moulvibazar" },
    { value: "munshiganj", label: "Munshiganj" },
    { value: "mymensingh", label: "Mymensingh" },
    { value: "naogaon", label: "Naogaon" },
    { value: "narail", label: "Narail" },
    { value: "narayanganj", label: "Narayanganj" },
    { value: "narsingdi", label: "Narsingdi" },
    { value: "natore", label: "Natore" },
    { value: "netrokona", label: "Netrokona" },
    { value: "nilphamari", label: "Nilphamari" },
    { value: "noakhali", label: "Noakhali" },
    { value: "pabna", label: "Pabna" },
    { value: "panchagarh", label: "Panchagarh" },
    { value: "patuakhali", label: "Patuakhali" },
    { value: "pirojpur", label: "Pirojpur" },
    { value: "rajbari", label: "Rajbari" },
    { value: "rajshahi", label: "Rajshahi" },
    { value: "rangamati", label: "Rangamati" },
    { value: "rangpur", label: "Rangpur" },
    { value: "satkhira", label: "Satkhira" },
    { value: "shariatpur", label: "Shariatpur" },
    { value: "sherpur", label: "Sherpur" },
    { value: "sirajganj", label: "Sirajganj" },
    { value: "sunamganj", label: "Sunamganj" },
    { value: "sylhet", label: "Sylhet" },
    { value: "tangail", label: "Tangail" },
    { value: "thakurgaon", label: "Thakurgaon" },
  ];


  return (
    <>
      <Navbar />
      <div className="min-h-screen m-auto ">


        <div className="container mx-auto flex justify-center items-center px-4 py-8 mt-20">
          <div className="grid grid-re lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6 order-2 lg:order-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="w-5 h-5" />
                    Shipping Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Full Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phoneNumber">Phone Number</Label>
                      <Input
                        id="phoneNumber"
                        placeholder="01612345678"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          handleInputChange("phoneNumber", e.target.value)
                        }
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="mb-1">District</Label>
                    <Popover open={open} onOpenChange={setOpen} className="w-full mt-2">
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={open}
                          className="w-full justify-between"
                        >
                          {value
                            ? districts.find((district) => district.value === value)?.label
                            : "Select District..."}
                          <ChevronsUpDown className="opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command>
                          <CommandInput placeholder="Search framework..." className="h-9" />
                          <CommandList>
                            <CommandEmpty>No framework found.</CommandEmpty>
                            <CommandGroup>
                              {districts.map((district) => (
                                <CommandItem
                                  key={district.value}
                                  value={district.value}
                                  onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                  }}
                                >
                                  {district.label}
                                  <Check
                                    className={cn(
                                      "ml-auto",
                                      value === district.value ? "opacity-100" : "opacity-0"
                                    )}
                                  />
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      placeholder="123 Main Street"
                      value={formData.address}
                      onChange={(e) =>
                        handleInputChange("address", e.target.value)
                      }
                      className="mt-1"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox onCheckedChange={() => setCreateAccount(!createAccount)} checked={createAccount} id="createAccount" />
                    <Label htmlFor="createAccount">Create Account</Label>
                  </div>
                  {createAccount && <div>
                    <Label htmlFor="password">Passowrd</Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="password"
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      className="mt-1"
                    />
                  </div>}
                  <div>
                    <Label>Note</Label>
                    <Textarea
                      id="note"
                      placeholder="Note"
                      value={formData.note}
                      onChange={(e) =>
                        handleInputChange("note", e.target.value)
                      }
                      className="mt-1"
                    />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary Sidebar */}
            <div className="space-y-6 order-1 lg:order-2">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {products.map((item) => (
                    <div>
                      <div
                        key={item?.id}
                        className="flex justify-between items-start gap-4"
                      >
                        <div className="">
                          <img
                            src={getImageUrl(item?.images?.[0])}
                            alt={item?.name}

                            className="w-20 h-20 object-contain"
                          />
                        </div>
                        <div className="">
                          <h4 className="font-medium text-sm ">
                            {item?.name}
                          </h4>
                          <div className="flex items-center gap-4" >
                            <p className="text-sm text-muted-foreground">
                              Qty: 1
                            </p>
                            <div className="flex items-center gap-1" >
                              <p className="font-medium">
                                TK{item?.sale_price}
                              </p>
                              <del>{item?.price}</del>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  ))}
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>{products.reduce((total, item) => total + item?.price * item?.quantity, 0)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Shipping</span>
                      <span>{shipping}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tax</span>
                      <span>{tax}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>{products.reduce((total, item) => total + item?.price * item?.quantity, 0)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
