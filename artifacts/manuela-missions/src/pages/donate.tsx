import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Copy, Lock, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Currency = 'NGN' | 'USD' | 'GBP';
type Frequency = 'one-time' | 'monthly';

const amounts = {
  NGN: [5000, 10000, 50000, 100000],
  USD: [10, 25, 100, 250],
  GBP: [10, 25, 100, 250],
};

const currencySymbols = { NGN: "₦", USD: "$", GBP: "£" };

const bankDetails = {
  NGN: [
    { label: "Bank", value: "GTBank" },
    { label: "Account Name", value: "Manuela Missions" },
    { label: "Account No", value: "0123456789" },
  ],
  USD: [
    { label: "Bank", value: "International Bank" },
    { label: "Account Name", value: "Manuela Missions" },
    { label: "SWIFT", value: "MMNG0001" },
    { label: "IBAN", value: "US12345678901234" },
  ],
  GBP: [
    { label: "Bank", value: "Barclays Bank UK" },
    { label: "Account Name", value: "Manuela Missions" },
    { label: "Sort Code", value: "20-00-00" },
    { label: "Account No", value: "12345678" },
  ]
};

export default function Donate() {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [amount, setAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [frequency, setFrequency] = useState<Frequency>('one-time');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const { toast } = useToast();

  const handleAmountClick = (val: number) => {
    setAmount(val);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount(0); // clear selected preset
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: `${label} copied successfully.`,
      duration: 2000,
    });
  };

  const handleProcessDonation = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = amount > 0 ? amount : Number(customAmount);
    if (!finalAmount || finalAmount <= 0) {
      toast({ title: "Error", description: "Please enter a valid amount.", variant: "destructive" });
      return;
    }
    toast({
      title: "Processing Donation...",
      description: `Thank you for choosing to donate ${currencySymbols[currency]}${finalAmount}. Redirecting to secure gateway...`,
    });
  };

  return (
    <Layout>
      <div className="bg-gradient-to-r from-secondary to-purple-900 py-16 px-4 text-center mt-[72px]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Make a Difference Today</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">Your generosity brings hope to those who need it most.</p>
      </div>

      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10">
          
          {/* Main Form Area */}
          <div className="flex-1">
            <Card className="border-none shadow-2xl overflow-hidden rounded-3xl">
              <CardContent className="p-0">
                {/* Header Toggles */}
                <div className="flex flex-col sm:flex-row border-b border-border">
                  <div className="flex-1 flex border-b sm:border-b-0 sm:border-r border-border">
                    <button onClick={() => setFrequency('one-time')} className={`flex-1 py-4 font-semibold text-lg transition-colors ${frequency === 'one-time' ? 'bg-white text-primary' : 'bg-muted text-muted-foreground hover:bg-white/50'}`}>One-Time</button>
                    <button onClick={() => setFrequency('monthly')} className={`flex-1 py-4 font-semibold text-lg transition-colors ${frequency === 'monthly' ? 'bg-white text-primary' : 'bg-muted text-muted-foreground hover:bg-white/50'}`}>Monthly</button>
                  </div>
                  <div className="flex bg-muted">
                    {(['NGN', 'USD', 'GBP'] as Currency[]).map(curr => (
                      <button 
                        key={curr} 
                        onClick={() => { setCurrency(curr); setAmount(amounts[curr][2]); setCustomAmount(""); }}
                        className={`px-6 py-4 font-bold transition-colors ${currency === curr ? 'bg-primary text-white' : 'text-muted-foreground hover:text-foreground hover:bg-black/5'}`}
                      >
                        {curr}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-6 md:p-10 space-y-8">
                  {/* Amount Selection */}
                  <div>
                    <Label className="text-lg mb-4 block">Select Amount ({currency})</Label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                      {amounts[currency].map(val => (
                        <Button 
                          key={val} 
                          variant={amount === val ? "default" : "outline"}
                          className={`h-14 text-lg font-bold ${amount === val ? 'bg-primary border-primary' : 'border-border text-foreground hover:border-primary/50'}`}
                          onClick={() => handleAmountClick(val)}
                        >
                          {currencySymbols[currency]}{val.toLocaleString()}
                        </Button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">{currencySymbols[currency]}</span>
                      <Input 
                        type="number" 
                        placeholder="Custom Amount" 
                        className="pl-8 h-14 text-lg bg-background border-border"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                      />
                    </div>
                  </div>

                  {/* Personal Info */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="anonymous" checked={isAnonymous} onCheckedChange={(c) => setIsAnonymous(!!c)} />
                      <Label htmlFor="anonymous" className="cursor-pointer font-medium">Make this donation anonymously</Label>
                    </div>

                    {!isAnonymous && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 animate-in fade-in slide-in-from-top-2">
                        <div className="space-y-2"><Label>First Name</Label><Input placeholder="John" className="h-12" /></div>
                        <div className="space-y-2"><Label>Last Name</Label><Input placeholder="Doe" className="h-12" /></div>
                        <div className="space-y-2 sm:col-span-2"><Label>Email Address</Label><Input type="email" placeholder="john@example.com" className="h-12" /></div>
                      </div>
                    )}
                    {isAnonymous && (
                      <div className="bg-muted p-4 rounded-xl text-muted-foreground text-sm flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-primary" /> Your donation will be recorded anonymously. We will not ask for your personal details.
                      </div>
                    )}
                  </div>

                  {/* Payment Methods */}
                  <div className="pt-4 border-t border-border">
                    <Label className="text-lg mb-4 block">Payment Method</Label>
                    <Tabs defaultValue="card" className="w-full">
                      <TabsList className="grid w-full grid-cols-2 h-14 bg-muted mb-6">
                        <TabsTrigger value="card" className="data-[state=active]:bg-white h-10 text-base">Credit/Debit Card</TabsTrigger>
                        <TabsTrigger value="bank" className="data-[state=active]:bg-white h-10 text-base">Bank Transfer</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="card" className="space-y-4">
                        <form onSubmit={handleProcessDonation}>
                          <div className="space-y-4 bg-muted/30 p-6 rounded-xl border border-border/50">
                            <div className="space-y-2">
                              <Label>Card Number</Label>
                              <Input placeholder="0000 0000 0000 0000" className="h-12 bg-white" required />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2"><Label>Expiry (MM/YY)</Label><Input placeholder="12/25" className="h-12 bg-white" required /></div>
                              <div className="space-y-2"><Label>CVV</Label><Input placeholder="123" className="h-12 bg-white" required /></div>
                            </div>
                            <div className="space-y-2">
                              <Label>Cardholder Name</Label>
                              <Input placeholder="John Doe" className="h-12 bg-white" required />
                            </div>
                          </div>
                          <Button type="submit" size="lg" className="w-full h-16 text-lg font-bold mt-6 bg-secondary hover:bg-secondary/90 text-white rounded-xl shadow-lg hover:shadow-xl transition-all flex gap-2">
                            <Lock className="w-5 h-5" /> Donate Securely
                          </Button>
                        </form>
                      </TabsContent>

                      <TabsContent value="bank">
                        <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 space-y-4">
                          <p className="text-sm text-muted-foreground mb-4">Please transfer your donation to the following {currency} account:</p>
                          <div className="space-y-3">
                            {bankDetails[currency].map((detail, idx) => (
                              <div key={idx} className="flex justify-between items-center bg-white p-3 rounded-lg border border-border">
                                <span className="text-sm font-medium text-muted-foreground">{detail.label}</span>
                                <div className="flex items-center gap-3">
                                  <span className="font-bold text-foreground">{detail.value}</span>
                                  <button onClick={() => copyToClipboard(detail.value, detail.label)} className="text-primary hover:text-primary/70 bg-primary/10 p-1.5 rounded-md transition-colors" title="Copy">
                                    <Copy className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800 flex gap-2">
                            <strong>Note:</strong> After transfer, please email your proof of payment to donations@manuelamissions.com to get your receipt.
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-border text-sm text-muted-foreground font-medium">
                    <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-green-600" /> SSL Secured</span>
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-blue-600" /> 256-bit Encryption</span>
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-green-600" /> Safe & Trusted</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Impact Equivalents */}
          <div className="lg:w-80 hidden lg:block space-y-6">
            <div className="sticky top-28">
              <h3 className="text-xl font-bold mb-6">
                Why Donate?
              </h3>
              <div className="space-y-4">
                {[
                  { cost: currency === 'USD' ? '$10' : currency === 'NGN' ? '₦5,000' : '£10', impact: "Feeds a child for an entire week" },
                  { cost: currency === 'USD' ? '$25' : currency === 'NGN' ? '₦12,500' : '£25', impact: "Provides school supplies for a year" },
                  { cost: currency === 'USD' ? '$100' : currency === 'NGN' ? '₦50,000' : '£100', impact: "Funds a life-saving medical consultation" },
                  { cost: currency === 'USD' ? '$250' : currency === 'NGN' ? '₦125,000' : '£250', impact: "Supports a family with food and aid for a month" },
                ].map((item, i) => (
                  <Card key={i} className="border border-border shadow-sm hover:border-primary/30 transition-colors">
                    <CardContent className="p-4 flex gap-4 items-start">
                      <div className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-lg whitespace-nowrap text-sm">
                        {item.cost}
                      </div>
                      <p className="text-sm font-medium leading-snug pt-0.5">{item.impact}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 bg-foreground text-white p-6 rounded-2xl">
                <h4 className="font-bold text-lg mb-2">Transparency Promise</h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  100% of all donations go directly to funding our programs. We ensure maximum impact for every currency donated.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
