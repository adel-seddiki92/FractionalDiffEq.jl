var documenterSearchIndex = {"docs":
[{"location":"APIs/#FractionalDiffEq.jl-APIs","page":"FractionalDiffEq APIs","title":"FractionalDiffEq.jl APIs","text":"","category":"section"},{"location":"APIs/#Problem-definition:","page":"FractionalDiffEq APIs","title":"Problem definition:","text":"","category":"section"},{"location":"APIs/","page":"FractionalDiffEq APIs","title":"FractionalDiffEq APIs","text":"FractionalDiffEq.FDEProblem","category":"page"},{"location":"APIs/#FractionalDiffEq.FDEProblem","page":"FractionalDiffEq APIs","title":"FractionalDiffEq.FDEProblem","text":"FDEProblem(f, α, u0, T, h)\n\nDefine a Fractional Differential in time interval [0, T] with initial value y(0)=u₀, α-order derivative and step size h.\n\n\n\n\n\n","category":"type"},{"location":"APIs/#General-solve-API","page":"FractionalDiffEq APIs","title":"General solve API","text":"","category":"section"},{"location":"APIs/","page":"FractionalDiffEq APIs","title":"FractionalDiffEq APIs","text":"FractionalDiffEq.solve","category":"page"},{"location":"APIs/#FractionalDiffEq.solve","page":"FractionalDiffEq APIs","title":"FractionalDiffEq.solve","text":"solve(FDEProblem, PECE())\n\nAfter define the FDEProblem, use PECE(Predict-Evaluate-Correct-Evaluate) algorithm to computing the Fractional Differential Equation\n\nNote that we use Predictor-Corrector algorithms to approximate the result, with can be specified as PECE(Predict-Evaluate-Correct-Evaluate)\n\nAlgorithm is taken from Diethelm's paper.\n\n\n\n\n\n","category":"function"},{"location":"APIs/#Current-algorithms:","page":"FractionalDiffEq APIs","title":"Current algorithms:","text":"","category":"section"},{"location":"APIs/","page":"FractionalDiffEq APIs","title":"FractionalDiffEq APIs","text":"FractionalDiffEq.PECE","category":"page"},{"location":"APIs/","page":"FractionalDiffEq APIs","title":"FractionalDiffEq APIs","text":"FractionalDiffEq.MatrixD","category":"page"},{"location":"example/example/#FDE-Example","page":"Example","title":"FDE Example","text":"","category":"section"},{"location":"example/example/#An-easy-example","page":"Example","title":"An easy example","text":"","category":"section"},{"location":"example/example/","page":"Example","title":"Example","text":"Long story short! Let's try FractionalDiffEq.jl to solve a fractional differential equation!!!","category":"page"},{"location":"example/example/","page":"Example","title":"Example","text":"Suppose we have the initial value problem:","category":"page"},{"location":"example/example/","page":"Example","title":"Example","text":"D^05 y(x)=1-y \ny(0)=0","category":"page"},{"location":"example/example/","page":"Example","title":"Example","text":"So to solve the problem, we can use FractionalDiffEq.jl like this:","category":"page"},{"location":"example/example/","page":"Example","title":"Example","text":"using FractionalDiffEq, Plots\n\nfun(x, y) = 1-y\nprob=FDEProblem(fun, 0.5, 0, 5, 0.001)\nresult=solve(prob)\ntspan=collect(0:0.001:5)\n\nplot(tspan, result, title=\"D^α y(x)=1-y, y(0)=0\", linewidth=2, legend=:bottomright)","category":"page"},{"location":"example/example/","page":"Example","title":"Example","text":"And execute the file in your favorite IDE (VSCode recommend).","category":"page"},{"location":"example/example/","page":"Example","title":"Example","text":"Bingo!! You get the result!","category":"page"},{"location":"example/example/","page":"Example","title":"Example","text":"(Image: Simple Example image)","category":"page"},{"location":"example/example/#Comparison-with-analytical-solution","page":"Example","title":"Comparison  with analytical solution","text":"","category":"section"},{"location":"example/example/","page":"Example","title":"Example","text":"Let's see if the result computed using FractionalDiffEq.jl is correct compared with analytical solution.","category":"page"},{"location":"example/example/","page":"Example","title":"Example","text":"Suppose there is an initial value problem:","category":"page"},{"location":"example/example/","page":"Example","title":"Example","text":"D^18y(x)+y(x)=1 \ny(0)=0 y(0)=0","category":"page"},{"location":"example/example/","page":"Example","title":"Example","text":"We already know the solution of this fractional differential equation is","category":"page"},{"location":"example/example/","page":"Example","title":"Example","text":"y(x)=x^18E_18 28(-x^18)","category":"page"},{"location":"example/example/","page":"Example","title":"Example","text":"Here, E represent Mittag Leffler function:","category":"page"},{"location":"example/example/","page":"Example","title":"Example","text":"E_alpha beta=displaystylesum_k=0^inftyfracz^kGamma(alpha k+beta)","category":"page"},{"location":"example/example/","page":"Example","title":"Example","text":"And we use jlapeyre/MittagLeffler.jl to generate Mittag Leffler function.","category":"page"},{"location":"example/example/","page":"Example","title":"Example","text":"using FractionalDiffEq\nusing Plots\nusing MittagLeffler\n\n#Analytical solution\ntarget = []\n\nfor i in 0:0.01:20\n    push!(target, i^1.8*mittleff(1.8,2.8,-i^1.8))\nend\n\n#Numerical solution\nfun(x, y) = 1-y\nprob = FDEProblem(fun, 1.8, 0, 20, 0.01)\nresult=solve(prob)\ntspan=collect(0:0.01:20)\n\ngr()\n\nplot(tspan, result, title=\"D^1.8 y(x)=1-y, y(0)=0\", linewidth=5, label=\"Numerical\", legend=:bottomright)\nplot!(tspan, target, lw=3, ls=:dash, label=\"Analytical\")","category":"page"},{"location":"example/example/","page":"Example","title":"Example","text":"And execute the program you can get:","category":"page"},{"location":"example/example/","page":"Example","title":"Example","text":"(Image: Example image)","category":"page"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"CurrentModule = FractionalDiffEq","category":"page"},{"location":"#FractionalDiffEq.jl","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"","category":"section"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"Hello there👋!","category":"page"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"FractionalDiffEq.jl is a Julia package aiming at solving Fractional Differential Equations using high performance numerical methods","category":"page"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"Pages = [\"index.md\"]","category":"page"},{"location":"#Installation","page":"FractionalDiffEq.jl","title":"Installation","text":"","category":"section"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"If you have already install Julia, you can install FractionalDiffEq.jl in REPL using Julia package manager:","category":"page"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"Pkg> add FractionalDiffEq","category":"page"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"Or if you want to experience the latest version of FractionalDiffEq.jl:","category":"page"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"Pkg> add FractionalDiffEq#master","category":"page"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"warning: Scope of order\nPlease note that right now, FractionalDiffEq.jl only support 0  alpha  2","category":"page"},{"location":"#Plans","page":"FractionalDiffEq.jl","title":"Plans","text":"","category":"section"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"More algorithms are planned to support\nFractional Partial differential Equations","category":"page"},{"location":"#Contributing","page":"FractionalDiffEq.jl","title":"Contributing","text":"","category":"section"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"The development of FractionalDiffEq.jl is on GitHub, please report bugs or send pull requests to help FractionalDiffEq.jl grow.","category":"page"},{"location":"#Acknowledge","page":"FractionalDiffEq.jl","title":"Acknowledge","text":"","category":"section"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"FractionalDiffEq.jl is built upon the hard work of many scientific researchers, I sincerely appreciate what they have done to help the development of science and technology.","category":"page"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"info: WIP\nFractionalDiffEq.jl is under heavy construction, some APIs or docs might change a lot.","category":"page"}]
}
