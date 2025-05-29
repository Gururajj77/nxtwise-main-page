import { Plus, Filter, AlertCircle, TrendingUp, Package, ArrowUpRight, Search, ChevronLeft, Edit3, ShoppingCart, Truck, Star, Download } from 'lucide-react';

export type InventoryPage = 'dashboard' | 'product-detail' | 'suppliers' | 'reports';

export function InventoryDashboardPreview({ onNavigate }: { onNavigate: (page: InventoryPage) => void }) {
  return (
    <div className="bg-gray-50 h-[600px]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <h3 className="text-gray-900 text-base font-bold">Inventory Management</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-xs bg-emerald-600 text-white rounded">Add Product</button>
            <button onClick={() => onNavigate('suppliers')} className="px-3 py-1.5 text-xs border rounded">Suppliers</button>
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="bg-amber-50 p-3 rounded flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-600" />
          <p className="text-sm text-amber-900">18 products expiring soon</p>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <div className="bg-white p-3 rounded border">
            <p className="text-xs text-gray-500">Total Value</p>
            <p className="text-lg font-bold">$124,580</p>
          </div>
          <div className="bg-white p-3 rounded border">
            <p className="text-xs text-gray-500">Total Items</p>
            <p className="text-lg font-bold">1,245</p>
          </div>
          <div className="bg-white p-3 rounded border">
            <p className="text-xs text-gray-500">Low Stock</p>
            <p className="text-lg font-bold text-amber-600">42</p>
          </div>
          <div className="bg-white p-3 rounded border">
            <p className="text-xs text-gray-500">Out of Stock</p>
            <p className="text-lg font-bold text-red-600">7</p>
          </div>
        </div>

        <div className="flex gap-1 bg-white rounded p-1 border">
          <button className="px-3 py-2 text-xs bg-emerald-100 rounded">Inventory</button>
          <button onClick={() => onNavigate('suppliers')} className="px-3 py-2 text-xs">Suppliers</button>
          <button onClick={() => onNavigate('reports')} className="px-3 py-2 text-xs">Reports</button>
        </div>

        <div className="bg-white rounded border">
          <table className="w-full text-sm">
            <thead className="bg-emerald-50 text-xs">
              <tr>
                <th className="px-4 py-2 text-left">Product</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-right">Stock</th>
                <th className="px-4 py-2 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="hover:bg-gray-50 cursor-pointer" onClick={() => onNavigate('product-detail')}>
                <td className="px-4 py-3">
                  <p className="font-medium">Paracetamol 500mg</p>
                  <p className="text-xs text-gray-500">SKU: MED-001</p>
                </td>
                <td className="px-4 py-3">Pain Relief</td>
                <td className="px-4 py-3 text-right">124 units</td>
                <td className="px-4 py-3 text-center">
                  <span className="text-xs text-green-600">Good</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 cursor-pointer">
                <td className="px-4 py-3">
                  <p className="font-medium">Amoxicillin 250mg</p>
                  <p className="text-xs text-gray-500">SKU: ANT-042</p>
                </td>
                <td className="px-4 py-3">Antibiotics</td>
                <td className="px-4 py-3 text-right">42 units</td>
                <td className="px-4 py-3 text-center">
                  <span className="text-xs text-amber-600">Low</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function InventoryProductDetail({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-gray-50 h-[600px]">
      <div className="bg-white border-b px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div>
              <h3 className="font-semibold">Paracetamol 500mg</h3>
              <p className="text-xs text-gray-500">SKU: MED-001</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-xs border rounded">Edit</button>
            <button className="px-3 py-1.5 text-xs bg-emerald-600 text-white rounded">Reorder</button>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded border p-4">
            <h4 className="font-medium mb-3">Product Information</h4>
            <div className="space-y-2">
              <div><span className="text-xs text-gray-500">Product Name:</span> Paracetamol 500mg Tablets</div>
              <div><span className="text-xs text-gray-500">Category:</span> Pain Relief</div>
              <div><span className="text-xs text-gray-500">Manufacturer:</span> MediCorp Pharmaceuticals</div>
            </div>
          </div>
          <div className="bg-white rounded border p-4">
            <h4 className="font-medium mb-3">Stock Information</h4>
            <div className="space-y-2">
              <div><span className="text-xs text-gray-500">Current Stock:</span> 124 units</div>
              <div><span className="text-xs text-gray-500">Min Level:</span> 50 units</div>
              <div><span className="text-xs text-gray-500">Expiry:</span> March 15, 2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InventorySuppliers({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-gray-50 h-[600px]">
      <div className="bg-white border-b px-4 py-3">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <h3 className="font-semibold">Supplier Management</h3>
        </div>
      </div>

      <div className="p-6">
        <div className="bg-white rounded border">
          <div className="p-4 border-b">
            <h4 className="font-medium">Active Suppliers</h4>
          </div>
          <div className="divide-y">
            <div className="p-4">
              <div className="flex justify-between">
                <div>
                  <h5 className="font-medium">MediCorp Pharmaceuticals</h5>
                  <p className="text-sm text-gray-500">Primary supplier for pain relief medications</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />)}
                    <span className="text-xs">4.8</span>
                  </div>
                </div>
                <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Active</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between">
                <div>
                  <h5 className="font-medium">HealthSupply Co.</h5>
                  <p className="text-sm text-gray-500">Antibiotics and prescription medications</p>
                </div>
                <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InventoryReports({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-gray-50 h-[600px]">
      <div className="bg-white border-b px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <h3 className="font-semibold">Inventory Reports</h3>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded">
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded border">
            <p className="text-sm text-gray-500">Inventory Turnover</p>
            <p className="text-2xl font-bold">8.2x</p>
          </div>
          <div className="bg-white p-4 rounded border">
            <p className="text-sm text-gray-500">Avg Days to Sell</p>
            <p className="text-2xl font-bold">45</p>
          </div>
          <div className="bg-white p-4 rounded border">
            <p className="text-sm text-gray-500">Stockouts</p>
            <p className="text-2xl font-bold text-red-600">7</p>
          </div>
          <div className="bg-white p-4 rounded border">
            <p className="text-sm text-gray-500">Waste Rate</p>
            <p className="text-2xl font-bold">1.2%</p>
          </div>
        </div>

        <div className="bg-white rounded border p-4">
          <h4 className="font-medium mb-3">Top Categories by Value</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Antibiotics</span>
              <span className="font-medium">$45,200</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Pain Relief</span>
              <span className="font-medium">$32,800</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Diabetes Care</span>
              <span className="font-medium">$28,400</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}