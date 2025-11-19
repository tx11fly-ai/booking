import './globals.css';

export const metadata = {
  title: 'Elite Airport Travel',
  description: 'Airport and cruise transfers from Hull to all major UK airports.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="page-root">{children}</div>
      </body>
    </html>
  );
}
