import HelloWorldCard from "@/components/hello-world-card"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Hello World
          </h1>
          <p className="text-lg text-muted-foreground">
            A simple shadcn/ui application built with Next.js 15 and React 19
          </p>
        </div>
        
        <div className="flex justify-center">
          <HelloWorldCard />
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          <p>Built with ❤️ using the latest web technologies</p>
          <p className="mt-2">
            <span className="font-semibold">Next.js 15</span> • {" "}
            <span className="font-semibold">React 19</span> • {" "}
            <span className="font-semibold">shadcn/ui</span> • {" "}
            <span className="font-semibold">Tailwind CSS v4</span>
          </p>
        </div>
      </div>
    </div>
  )
}
