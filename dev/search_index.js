var documenterSearchIndex = {"docs":
[{"location":"diffusion/#Diffusion-equation.","page":"Diffusion","title":"Diffusion equation.","text":"","category":"section"},{"location":"diffusion/#Diffusion-equation","page":"Diffusion","title":"Diffusion equation","text":"","category":"section"},{"location":"diffusion/","page":"Diffusion","title":"Diffusion","text":"Diffusion equation is a classical partial equation widely used in Physics to describe density fluctuations in a material undergonig diffusion.","category":"page"},{"location":"diffusion/","page":"Diffusion","title":"Diffusion","text":"fracpartial upartial t=nablacdot(kappa nabla u)","category":"page"},{"location":"diffusion/","page":"Diffusion","title":"Diffusion","text":"Here, kappa is the diffusion coefficient which is spatially-dependent. When kappa is a constant, Diffusion equation evolves to Heat equation:","category":"page"},{"location":"diffusion/","page":"Diffusion","title":"Diffusion","text":"fracpartial upartial t=kappanabla^2u","category":"page"},{"location":"diffusion/","page":"Diffusion","title":"Diffusion","text":"The Diffusion Equation belongs to Partial Differential Equations, and there are many amazing organizations and packages are dedicate to solve Partial Differential equations using high performance and advancing algorithms:","category":"page"},{"location":"diffusion/","page":"Diffusion","title":"Diffusion","text":"See Survey of PDE Packages","category":"page"},{"location":"diffusion/#Differential-Equations-with-spatial-fractional-derivative","page":"Diffusion","title":"Differential Equations with spatial fractional derivative","text":"","category":"section"},{"location":"diffusion/","page":"Diffusion","title":"Diffusion","text":"When we modeling our problems, spatial fractional derivative maybe more suitable for our model, which change the diffusion equation to Diffusion equation with spatial fractional derivative","category":"page"},{"location":"diffusion/","page":"Diffusion","title":"Diffusion","text":"fracpartial upartial t-fracpartial^beta upartial x^beta=f(t u)","category":"page"},{"location":"diffusion/#Diffusion-Equations-with-time-fractional-derivative","page":"Diffusion","title":"Diffusion Equations with time fractional derivative","text":"","category":"section"},{"location":"diffusion/","page":"Diffusion","title":"Diffusion","text":"When we modeling our problems, time fractional derivative maybe more suitable for our model, which change the diffusion equation to Diffusion equation with time fractional derivative","category":"page"},{"location":"diffusion/","page":"Diffusion","title":"Diffusion","text":"^C_0D^alpha_tu=fracpartial^2upartial x^2","category":"page"},{"location":"diffusion/#General-fractional-diffusion-equation","page":"Diffusion","title":"General fractional diffusion equation","text":"","category":"section"},{"location":"diffusion/","page":"Diffusion","title":"Diffusion","text":"Well, time fractional derivative and spatial fractional derivative are both need to take into consideration:","category":"page"},{"location":"diffusion/","page":"Diffusion","title":"Diffusion","text":"^C_0D^alpha_tu-fracpartial^beta upartialx^beta=f(t u)","category":"page"},{"location":"multiterm/#Multi-term-FDE","page":"Multi-term FDE","title":"Multi term FDE","text":"","category":"section"},{"location":"multiterm/","page":"Multi-term FDE","title":"Multi-term FDE","text":"By specifying different order in the equation, we can handle multi-term differential equations now!","category":"page"},{"location":"multiterm/","page":"Multi-term FDE","title":"Multi-term FDE","text":"Let's see if we have a initial value problem with multiple terms derivative containing both fractional and integer, we can use the FODEMatrixDiscrete algorithm to solve the equation.","category":"page"},{"location":"multiterm/","page":"Multi-term FDE","title":"Multi-term FDE","text":"All we have to do is use the general derivative representing function D(size, order, step) to represent different derivative, for example, D(30, 2, 0.01) represent the second order derivative y(t) term and D(30, 2.5, 0.01) represent the 2.5 order derivative D^25y(t) term.","category":"page"},{"location":"multiterm/","page":"Multi-term FDE","title":"Multi-term FDE","text":"warning: Keep the parameter unanimous\nWhen we are use D to represent different order deriavtives, please note we should keep the first parameter and third parameter unanimous, which represent the size of the discrete matrix and step size.","category":"page"},{"location":"multiterm/#Detailed-Usage","page":"Multi-term FDE","title":"Detailed Usage","text":"","category":"section"},{"location":"multiterm/","page":"Multi-term FDE","title":"Multi-term FDE","text":"Let's see if we have a equation like:","category":"page"},{"location":"multiterm/","page":"Multi-term FDE","title":"Multi-term FDE","text":"2y(t)+4D^15y(t)=1","category":"page"},{"location":"multiterm/","page":"Multi-term FDE","title":"Multi-term FDE","text":"To solve this equation, you can use the code:","category":"page"},{"location":"multiterm/","page":"Multi-term FDE","title":"Multi-term FDE","text":"equation = 2*D(30, 2, 0.01) + 4*D(30, 1.5, 0.01)\nrightside = 1\nsolve(equation, rightside, 2, 30, 0.01)","category":"page"},{"location":"multiterm/","page":"Multi-term FDE","title":"Multi-term FDE","text":"Bingo! the result would represent the numerical solution of this equation!!!!","category":"page"},{"location":"multiterm/#Example","page":"Multi-term FDE","title":"Example","text":"","category":"section"},{"location":"multiterm/","page":"Multi-term FDE","title":"Multi-term FDE","text":"We have an initla problem:","category":"page"},{"location":"multiterm/","page":"Multi-term FDE","title":"Multi-term FDE","text":"y(t)+frac116 ^C_0D^25_ty(t)+frac45y(t)+frac32y(t)+frac125^C_0D^05_ty(t)+frac65y(t)=frac172125cos(frac4t5)","category":"page"},{"location":"multiterm/","page":"Multi-term FDE","title":"Multi-term FDE","text":"y(0)=0 y(0)=0 y(0)=0","category":"page"},{"location":"multiterm/","page":"Multi-term FDE","title":"Multi-term FDE","text":"Model this problem and solve the equation:","category":"page"},{"location":"multiterm/","page":"Multi-term FDE","title":"Multi-term FDE","text":"using FractionalDiffEq\nusing Plots, LaTeXStrings\n\ns=\"\\$ A\\\\ complicated\\\\ example \\$\"\n\nT=30\nh=0.05\ntspan = collect(0.05:h:T)\n\nequation = D(600, 3, h)+1/16*D(600, 2.5, h)+4/5*D(600, 2, h)+3/2*D(600, 1, h)+1/25*D(600, 0.5, h)+6/5*D(600, 1, h);\nrightfun(x)=172/125*cos(4/5*x)\nresult=solve(equation, rightfun, 3, h, T)\n\nplot(tspan, result, title=s, legend=:bottomright)","category":"page"},{"location":"multiterm/","page":"Multi-term FDE","title":"Multi-term FDE","text":"info: Example in GitHub\nThis example is an official example in the source code, please see the example folder","category":"page"},{"location":"multiterm/","page":"Multi-term FDE","title":"Multi-term FDE","text":"By solving the equation and plotting the result, we can see its solution here:","category":"page"},{"location":"multiterm/","page":"Multi-term FDE","title":"Multi-term FDE","text":"(Image: Solution)","category":"page"},{"location":"APIs/#FractionalDiffEq.jl-APIs","page":"FractionalDiffEq APIs","title":"FractionalDiffEq.jl APIs","text":"","category":"section"},{"location":"APIs/#Problem-definition:","page":"FractionalDiffEq APIs","title":"Problem definition:","text":"","category":"section"},{"location":"APIs/","page":"FractionalDiffEq APIs","title":"FractionalDiffEq APIs","text":"FractionalDiffEq.FDEProblem","category":"page"},{"location":"APIs/#FractionalDiffEq.FDEProblem","page":"FractionalDiffEq APIs","title":"FractionalDiffEq.FDEProblem","text":"FDEProblem(f, α, u0, T, h)\n\nDefine a Fractional Differential in time interval [0, T] with initial value y(0)=u₀, α-order derivative and step size h.\n\n\n\n\n\n","category":"type"},{"location":"APIs/#General-solve-API","page":"FractionalDiffEq APIs","title":"General solve API","text":"","category":"section"},{"location":"APIs/","page":"FractionalDiffEq APIs","title":"FractionalDiffEq APIs","text":"FractionalDiffEq.solve","category":"page"},{"location":"APIs/#FractionalDiffEq.solve","page":"FractionalDiffEq APIs","title":"FractionalDiffEq.solve","text":"solve(FODEProblem, PECE())\n\nAfter define the FDEProblem, use PECE(Predict-Evaluate-Correct-Evaluate) algorithm to computing the Fractional Differential Equation\n\n\n\n\n\nsolve(equation, right, h, T, MatrixDiscrete())\n\nUsing the Matrix Discretization algorithm proposed by Prof Igor Podlubny to obtain the numerical solution.\n\n\n\n\n\nsolve(α, β, T, M, N, FPDEMatrixDiscrete())\n\nWhen using the Martix \n\n\n\n\n\n","category":"function"},{"location":"APIs/#Current-algorithms:","page":"FractionalDiffEq APIs","title":"Current algorithms:","text":"","category":"section"},{"location":"APIs/#Base-type","page":"FractionalDiffEq APIs","title":"Base type","text":"","category":"section"},{"location":"APIs/","page":"FractionalDiffEq APIs","title":"FractionalDiffEq APIs","text":"FractionalDiffEq.FractionalDiffEqAlgorithm","category":"page"},{"location":"APIs/#FractionalDiffEq.FractionalDiffEqAlgorithm","page":"FractionalDiffEq APIs","title":"FractionalDiffEq.FractionalDiffEqAlgorithm","text":"Base type of FractionalDiffEq algorithms\n\n\n\n\n\n","category":"type"},{"location":"APIs/#Problem-types","page":"FractionalDiffEq APIs","title":"Problem types","text":"","category":"section"},{"location":"APIs/","page":"FractionalDiffEq APIs","title":"FractionalDiffEq APIs","text":"FractionalDiffEq.FODEProblem\nFractionalDiffEq.FPDEProblem","category":"page"},{"location":"APIs/#FractionalDiffEq.FODEProblem","page":"FractionalDiffEq APIs","title":"FractionalDiffEq.FODEProblem","text":"FODEProblem(f, α, u0, T, h)\n\nFractional Ordinary Differential Equations definition\n\n\n\n\n\n","category":"type"},{"location":"APIs/#FractionalDiffEq.FPDEProblem","page":"FractionalDiffEq APIs","title":"FractionalDiffEq.FPDEProblem","text":"FPDEProblem()\n\n\n\n\n\n","category":"type"},{"location":"APIs/#Detailed-types","page":"FractionalDiffEq APIs","title":"Detailed types","text":"","category":"section"},{"location":"APIs/","page":"FractionalDiffEq APIs","title":"FractionalDiffEq APIs","text":"FractionalDiffEq.PECE","category":"page"},{"location":"APIs/#FractionalDiffEq.PECE","page":"FractionalDiffEq APIs","title":"FractionalDiffEq.PECE","text":"Predict-Evaluate-Correct-Evaluate algorithm.\n\nFor more details, please refer to Predictor-Corrector algorithms\n\nThis PECE algorithm is taken from Diethelm's paper.\n\n@article{\ntitle={A predictor-corrector approach for the numerical solution of fractional differential equations},\nauthor={Diethelm, Kai and Ford, Neville J. and Freed, Alan D.}\ndoi={https://doi.org/10.1023/A:1016592219341}\n}\n\n\n\n\n\n","category":"type"},{"location":"APIs/","page":"FractionalDiffEq APIs","title":"FractionalDiffEq APIs","text":"FractionalDiffEq.FODEMatrixDiscrete\nFractionalDiffEq.FPDEMatrixDiscrete","category":"page"},{"location":"APIs/#FractionalDiffEq.FODEMatrixDiscrete","page":"FractionalDiffEq APIs","title":"FractionalDiffEq.FODEMatrixDiscrete","text":"Using triangular strip matrices to discrete fractional ordinary differential equations to simple algebra system and solve the system.\n\n\n\n\n\n","category":"type"},{"location":"APIs/#FractionalDiffEq.FPDEMatrixDiscrete","page":"FractionalDiffEq APIs","title":"FractionalDiffEq.FPDEMatrixDiscrete","text":"Using triangular strip matrices to discrete fractional partial differential equations to simple algebra system and solve the system.\n\n\n\n\n\n","category":"type"},{"location":"APIs/#Some-models","page":"FractionalDiffEq APIs","title":"Some models","text":"","category":"section"},{"location":"APIs/","page":"FractionalDiffEq APIs","title":"FractionalDiffEq APIs","text":"FractionalDiffEq.bagleytorvik","category":"page"},{"location":"APIs/#FractionalDiffEq.bagleytorvik","page":"FractionalDiffEq APIs","title":"FractionalDiffEq.bagleytorvik","text":"bagleytorvik(p1, p2, p3, T, h)\n\nBy specifying the parameters of Bagley Torvik Equation, we can use bagleytorvik to directly obtain the numerical approximation of a bagley torvik equation.\n\ninfo: p2 ≠ 0\nPlease note that the parameter of fractional derivative part must not be 0\n\n\n\n\n\n","category":"function"},{"location":"APIs/","page":"FractionalDiffEq APIs","title":"FractionalDiffEq APIs","text":"FractionalDiffEq.diffusion","category":"page"},{"location":"APIs/#FractionalDiffEq.diffusion","page":"FractionalDiffEq APIs","title":"FractionalDiffEq.diffusion","text":"diffusion(α, β)\n\nDiffusion equation with time fractional derivative.\n\nα and β are the coefficients of the time derivative and spatial derivative.\n\n\n\n\n\n","category":"function"},{"location":"bagley-torvik/#Bagley-Torvik-Equation","page":"Bagley Torvik","title":"Bagley Torvik Equation","text":"","category":"section"},{"location":"get_start/#Get-Start","page":"Get Started","title":"Get Start","text":"","category":"section"},{"location":"get_start/#What-is-Fractional-Differential-Equations?","page":"Get Started","title":"What is Fractional Differential Equations?","text":"","category":"section"},{"location":"get_start/","page":"Get Started","title":"Get Started","text":"While the Ordinary Differential Equations and Partial Differential Equations are widely used in enormous areas and play important roles in their theoretical analysis, someone may asks, ODE and PDE are enough for nowadays modeling, has FDE any usage in our life?","category":"page"},{"location":"get_start/","page":"Get Started","title":"Get Started","text":"Well, fractional differential equation can be seen as the generalization of ODE and PDE. In our daily life, models usually are better described in fractional differential equations.","category":"page"},{"location":"get_start/","page":"Get Started","title":"Get Started","text":"A special applying case for fractional differential equations is viscoelasty, which research the property of a subject with both Viscosity and Elasticity. ","category":"page"},{"location":"get_start/","page":"Get Started","title":"Get Started","text":"And also the CRONE controller and PI^lambda D^mu controller deploy fractional derivative to better describe system. ","category":"page"},{"location":"get_start/#A-simple-example-——-Relaxation-Oscillation-Equation","page":"Get Started","title":"A simple example —— Relaxation Oscillation Equation","text":"","category":"section"},{"location":"get_start/","page":"Get Started","title":"Get Started","text":"Let's see a simple model involving fractional differential equations: Relaxation Oscillation Process","category":"page"},{"location":"get_start/","page":"Get Started","title":"Get Started","text":"D^18y(t)+y(t)=1 (t0)","category":"page"},{"location":"get_start/","page":"Get Started","title":"Get Started","text":"y^(k)(0)=0","category":"page"},{"location":"get_start/","page":"Get Started","title":"Get Started","text":"We can solve the Relaxation Oscillation Equation using FractionalDiffEq.jl:","category":"page"},{"location":"get_start/","page":"Get Started","title":"Get Started","text":"using FractionalDiffEq, Plots, LaTeXStrings\n\ns=\"\\$D^{0.5}y(x)=1-y,\\\\ y(0)=0\\$\"\n\nfun(x, y) = 1-y\nprob=FDEProblem(fun, 0.5, 0, 5, 0.01)\nresult=solve(prob, PECE())\ntspan=collect(0:0.01:5)\n\nplot(tspan, result, title=s, linewidth=2, legend=:bottomright)","category":"page"},{"location":"get_start/","page":"Get Started","title":"Get Started","text":"By ploting the numerical result, we can get the approximation result:","category":"page"},{"location":"get_start/","page":"Get Started","title":"Get Started","text":"(Image: Relaxation Oscillation)","category":"page"},{"location":"get_start/#FDE-with-specific-initial-value","page":"Get Started","title":"FDE with specific initial value","text":"","category":"section"},{"location":"get_start/","page":"Get Started","title":"Get Started","text":"While the former examples we only use the zero initial value problem, here, we can look at some problems with non-zero examples.","category":"page"},{"location":"get_start/#Some-Algorithms-explanation:","page":"Get Started","title":"Some Algorithms explanation:","text":"","category":"section"},{"location":"get_start/","page":"Get Started","title":"Get Started","text":"As a matter of fact, to solve a fractional differential equations is to solve a volterra integral equation:","category":"page"},{"location":"example/example/#FDE-Example","page":"Examples","title":"FDE Example","text":"","category":"section"},{"location":"example/example/#An-easy-example","page":"Examples","title":"An easy example","text":"","category":"section"},{"location":"example/example/","page":"Examples","title":"Examples","text":"Long story short! Let's try FractionalDiffEq.jl to solve a fractional differential equation!!!","category":"page"},{"location":"example/example/","page":"Examples","title":"Examples","text":"Suppose we have the initial value problem:","category":"page"},{"location":"example/example/","page":"Examples","title":"Examples","text":"D^05 y(x)=1-y \n\ny(0)=0","category":"page"},{"location":"example/example/","page":"Examples","title":"Examples","text":"So to solve the problem, we can use FractionalDiffEq.jl like this:","category":"page"},{"location":"example/example/","page":"Examples","title":"Examples","text":"using FractionalDiffEq, Plots, LaTeXStrings\n\ns=\"\\$D^{0.5}y(x)=1-y,\\\\ y(0)=0\\$\"\n\nfun(x, y) = 1-y\nprob=FDEProblem(fun, 0.5, 0, 5, 0.001)\nresult=solve(prob)\ntspan=collect(0:0.001:5)\n\nplot(tspan, result, title=s, linewidth=2, legend=:bottomright)","category":"page"},{"location":"example/example/","page":"Examples","title":"Examples","text":"And execute the file in your favorite IDE (VSCode recommend).","category":"page"},{"location":"example/example/","page":"Examples","title":"Examples","text":"Bingo!! You get the result!","category":"page"},{"location":"example/example/","page":"Examples","title":"Examples","text":"(Image: Simple Example image)","category":"page"},{"location":"example/example/#Comparison-with-analytical-solution","page":"Examples","title":"Comparison  with analytical solution","text":"","category":"section"},{"location":"example/example/","page":"Examples","title":"Examples","text":"Let's see if the result computed using FractionalDiffEq.jl is correct compared with analytical solution.","category":"page"},{"location":"example/example/","page":"Examples","title":"Examples","text":"Suppose there is an initial value problem:","category":"page"},{"location":"example/example/","page":"Examples","title":"Examples","text":"D^18y(x)+y(x)=1 \ny(0)=0 y(0)=0","category":"page"},{"location":"example/example/","page":"Examples","title":"Examples","text":"We already know the solution of this fractional differential equation is","category":"page"},{"location":"example/example/","page":"Examples","title":"Examples","text":"y(x)=x^18E_18 28(-x^18)","category":"page"},{"location":"example/example/","page":"Examples","title":"Examples","text":"Here, E represent Mittag Leffler function:","category":"page"},{"location":"example/example/","page":"Examples","title":"Examples","text":"E_alpha beta=displaystylesum_k=0^inftyfracz^kGamma(alpha k+beta)","category":"page"},{"location":"example/example/","page":"Examples","title":"Examples","text":"And we use jlapeyre/MittagLeffler.jl to generate Mittag Leffler function.","category":"page"},{"location":"example/example/","page":"Examples","title":"Examples","text":"using FractionalDiffEq\nusing Plots\nusing MittagLeffler\n\n#Analytical solution\ntarget = []\n\nfor i in 0:0.01:20\n    push!(target, i^1.8*mittleff(1.8,2.8,-i^1.8))\nend\n\ns=\"\\$D^{1.8}y(x)=1-y(x),\\\\ y(0)=0\\$\"\n\n#Numerical solution\nfun(x, y) = 1-y\nprob = FDEProblem(fun, 1.8, 0, 20, 0.01)\nresult=solve(prob)\ntspan=collect(0:0.01:20)\n\ngr()\n\nplot(tspan, result, title=s, linewidth=5, label=\"Numerical\", legend=:bottomright)\nplot!(tspan, target, lw=3, ls=:dash, label=\"Analytical\")","category":"page"},{"location":"example/example/","page":"Examples","title":"Examples","text":"And execute the program you can get:","category":"page"},{"location":"example/example/","page":"Examples","title":"Examples","text":"(Image: Example image)","category":"page"},{"location":"relaxation-oscillation/#Relaxation-Oscillation-Equation","page":"Relaxation Oscillation","title":"Relaxation Oscillation Equation","text":"","category":"section"},{"location":"relaxation-oscillation/","page":"Relaxation Oscillation","title":"Relaxation Oscillation","text":"(Image: Relaxo)","category":"page"},{"location":"relaxation-oscillation/","page":"Relaxation Oscillation","title":"Relaxation Oscillation","text":"https://en.wikipedia.org/wiki/Relaxation_oscillator","category":"page"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"CurrentModule = FractionalDiffEq","category":"page"},{"location":"#FractionalDiffEq.jl","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"","category":"section"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"Hello there👋!","category":"page"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"FractionalDiffEq.jl is a Julia package aiming at solving Fractional Differential Equations using high performance numerical methods.","category":"page"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"Pages = [\"index.md\"]","category":"page"},{"location":"#Installation","page":"FractionalDiffEq.jl","title":"Installation","text":"","category":"section"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"If you have already installed Julia, you can install FractionalDiffEq.jl in REPL using Julia package manager:","category":"page"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"Pkg> add FractionalDiffEq","category":"page"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"Or if you want to experience the latest version of FractionalDiffEq.jl:","category":"page"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"Pkg> add FractionalDiffEq#master","category":"page"},{"location":"#Features","page":"FractionalDiffEq.jl","title":"Features","text":"","category":"section"},{"location":"#Roadmap","page":"FractionalDiffEq.jl","title":"Roadmap","text":"","category":"section"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"[ ] More algorithms are planned to support\n[ ] Fractional Partial differential Equations","category":"page"},{"location":"#Contributing","page":"FractionalDiffEq.jl","title":"Contributing","text":"","category":"section"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"The development of FractionalDiffEq.jl is on GitHub, please report bugs or send pull requests to help FractionalDiffEq.jl grow.","category":"page"},{"location":"#Acknowledge","page":"FractionalDiffEq.jl","title":"Acknowledge","text":"","category":"section"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"FractionalDiffEq.jl is built upon the hard work of many scientific researchers, I sincerely appreciate what they have done to help the development of science and technology.","category":"page"},{"location":"","page":"FractionalDiffEq.jl","title":"FractionalDiffEq.jl","text":"info: WIP\nFractionalDiffEq.jl is under heavy construction, some APIs or docs might change a lot.","category":"page"}]
}
