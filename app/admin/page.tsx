import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdminImagePanel } from "@/components/admin/admin-image-panel"

export const metadata = {
  title: "Admin — Image Manager | PromoShop",
  robots: { index: false, follow: false },
}

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-[#1a1a1a]">
      <Header />
      <AdminImagePanel />
      <Footer />
    </div>
  )
}
