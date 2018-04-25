package prs.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import prs.domain.Product;
import prs.domain.ProductRepository;
import prs.util.PRSMaintenanceReturn;

@CrossOrigin
@Controller
@RequestMapping(path="/Product")
public class ProductController extends BaseController  {
	
	@Autowired
	private ProductRepository productRepository;
	
	@GetMapping(path="/List")
	public @ResponseBody Iterable<Product> getAllProducts() {
		return productRepository.findAll();
	}
	
	@GetMapping(path="/Get") 
	public @ResponseBody List<Product> getProduct (@RequestParam int id) {
		Product p = productRepository.findOne(id);
		return BaseController.getReturnArray(p);
	}
	
	@PostMapping(path="/Add") // Map ONLY GET Requests
	public @ResponseBody PRSMaintenanceReturn addNewProduct (@RequestBody Product product) {
		try {
			productRepository.save(product);
			System.out.println("Product has been saved " + product);
		} catch (Exception e) {
			product = null;
			System.out.println("Product saved:  "+ product);
		}
		return PRSMaintenanceReturn.getMaintReturn(product);
	}
	
	@PostMapping(path="/Update") 
	public @ResponseBody PRSMaintenanceReturn updateProduct (@RequestBody Product product) {
		
		try {
			productRepository.save(product);
			System.out.println("Product updated: " + product);
		} catch (EmptyResultDataAccessException exc) {
			System.out.println("Product was NOT updated " + product);	
			product = null;
		}
		return PRSMaintenanceReturn.getMaintReturn(product);
	}
	
	@GetMapping(path="/Delete") 
	public @ResponseBody PRSMaintenanceReturn deleteProduct (@RequestParam int id) {
		Product product = productRepository.findOne(id);
		
		try {
			productRepository.delete(product);
			System.out.println("Product Deleted: " + product);
		} catch (EmptyResultDataAccessException exc) {
			System.out.println("Product was NOT deleted " + product);	
			product = null;
		}
		return PRSMaintenanceReturn.getMaintReturn(product);

	}

}
