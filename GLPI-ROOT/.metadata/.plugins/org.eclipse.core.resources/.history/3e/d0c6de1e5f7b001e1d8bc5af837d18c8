package controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(
		name = "Servlet",
		urlPatterns	={"/cadastro","/controller","/insert"})


public class Controller extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
    public Controller() {
        super();
       
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String action = request.getServletPath();
		
		System.out.println(action);
		
		if(action.equals("/cadastro")){
			cadastro(request, response);
		} else if (action.equals("/insert")) {
			System.out.println("chegou em novo cadastro");
			novoCadastro(request,response);
		
		} 
	}

	protected void cadastro (HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.sendRedirect("cadastro.html");
	}
	
	protected void novoCadastro (HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		System.out.println(request.getParameter("nome"));
		System.out.println(request.getParameter("sobrenome"));
		System.out.println(request.getParameter("telefone"));
		System.out.println(request.getParameter("cargo"));
		System.out.println(request.getParameter("departamento"));
	}
	

}
