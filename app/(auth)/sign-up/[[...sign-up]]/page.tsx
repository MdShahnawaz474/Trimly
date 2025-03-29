import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md">
        <SignUp 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-black/40 backdrop-blur-xl shadow-2xl border border-white/10 rounded-2xl",
              headerTitle: "text-white text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent",
              headerSubtitle: "text-neutral-400",
              socialButtonsBlockButton: "bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all duration-300",
              formButtonPrimary: "bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white shadow-lg shadow-blue-500/20 transition-all duration-300",
              footerActionLink: "text-blue-400 hover:text-blue-300 transition-colors",
              formFieldLabel: "text-neutral-300",
              formFieldInput: "bg-white/5 border border-white/10 text-white focus:border-blue-500/50 focus:ring-blue-500/20 transition-all duration-300",
              dividerLine: "bg-white/10",
              dividerText: "text-neutral-500",
              identityPreviewText: "text-white",
              identityPreviewEditButton: "text-blue-400 hover:text-blue-300 transition-colors",
              formFieldInputShowPasswordButton: "text-neutral-400 hover:text-neutral-300"
            },  
            layout: {
              socialButtonsPlacement: "bottom"
            }
          }}
        />
      </div>
    </div>
  );
}
