import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md">
        <SignUp 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-neutral-900 shadow-xl border border-neutral-800",
              headerTitle: "text-white",
              headerSubtitle: "text-neutral-400",
              socialButtonsBlockButton: "bg-neutral-800 border-none hover:bg-neutral-700 text-white",
              formButtonPrimary: "bg-primary hover:bg-primary/80",
              footerActionLink: "text-primary hover:text-primary/80",
              formFieldLabel: "text-neutral-300",
              formFieldInput: "bg-neutral-800 border-neutral-700 text-white",
              dividerLine: "bg-neutral-800",
              dividerText: "text-neutral-500",
              identityPreviewText: "text-white",
              identityPreviewEditButton: "text-primary hover:text-primary/80",
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
