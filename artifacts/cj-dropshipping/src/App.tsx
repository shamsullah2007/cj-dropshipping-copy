import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import FindProducts from "@/pages/FindProducts";
import SourceForMe from "@/pages/SourceForMe";
import Warehouse from "@/pages/Warehouse";
import Services from "@/pages/Services";
import Blog from "@/pages/Blog";
import Academy from "@/pages/Academy";
import Podcast from "@/pages/Podcast";
import Login from "@/pages/Login";
import ProductDetail from "@/pages/ProductDetail";
import Checkout from "@/pages/Checkout";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/find-products" component={FindProducts} />
      <Route path="/source-for-me" component={SourceForMe} />
      <Route path="/warehouse" component={Warehouse} />
      <Route path="/services" component={Services} />
      <Route path="/blog" component={Blog} />
      <Route path="/academy" component={Academy} />
      <Route path="/podcast" component={Podcast} />
      <Route path="/login" component={Login} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/checkout" component={Checkout} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
