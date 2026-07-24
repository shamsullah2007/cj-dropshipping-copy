export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 mt-12">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-[#f97316] text-white font-bold text-2xl w-10 h-10 flex items-center justify-center rounded-md">
                CJ
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">
                dropshipping
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
              CJ Dropshipping is a global dropshipping platform that helps ecommerce sellers source products, manage inventory, and fulfill orders automatically worldwide.
            </p>
            <div className="flex gap-4">
              {['fb', 'tw', 'yt', 'ig', 'in'].map((social, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-orange-500 hover:text-white cursor-pointer transition-colors">
                  <span className="text-xs uppercase">{social}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">About Us</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-orange-500">About CJ</a></li>
              <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
              <li><a href="#" className="hover:text-orange-500">Careers</a></li>
              <li><a href="#" className="hover:text-orange-500">Partner Program</a></li>
              <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Customer Service</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-orange-500">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-500">Shipping Calculator</a></li>
              <li><a href="#" className="hover:text-orange-500">Track Order</a></li>
              <li><a href="#" className="hover:text-orange-500">Return Policy</a></li>
              <li><a href="#" className="hover:text-orange-500">Submit Dispute</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Integrations</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-orange-500">Shopify</a></li>
              <li><a href="#" className="hover:text-orange-500">WooCommerce</a></li>
              <li><a href="#" className="hover:text-orange-500">eBay</a></li>
              <li><a href="#" className="hover:text-orange-500">Etsy</a></li>
              <li><a href="#" className="hover:text-orange-500">TikTok Shop</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 pt-8 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} CJ Dropshipping. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600">Terms of Use</a>
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
