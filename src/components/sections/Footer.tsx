// src/components/sections/Footer.tsx

// footer component
export function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="w-full bg-[var(--color-background-alt)] border-t border-[var(--color-border)] py-6">
        <div className="container mx-auto px-8 flex justify-center items-center">
          <div className="text-[var(--color-text)] text-sm">
            &copy; {currentYear} Garrett Fincke. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  }