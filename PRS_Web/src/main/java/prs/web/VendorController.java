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

import prs.domain.Vendor;
import prs.domain.VendorRepository;
import prs.util.PRSMaintenanceReturn;
import prs.web.BaseController;

@CrossOrigin
@Controller
@RequestMapping(path="/Vendor")
public class VendorController {
	
	@Autowired
	private VendorRepository vendorRepository;
	
	@GetMapping(path="/List")
	public @ResponseBody Iterable<Vendor> getAllVendors() {
		return vendorRepository.findAll();
	}

	@PostMapping(path="/Add") // Map ONLY POST Requests
    public @ResponseBody Vendor addNewVendor (@RequestBody Vendor vendor) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
		// 
		// http://localhost:8080/Vendor/Add  - used in Postman
		//
        vendorRepository.save(vendor);
        System.out.println("Vendor saved:  "+vendor);
        return vendor;
    }
	
	@GetMapping(path="/Get") 
	public @ResponseBody List<Vendor> getVendor (@RequestParam int id) {
		Vendor p = vendorRepository.findOne(id);
		return BaseController.getReturnArray(p);
	}

	@PostMapping(path="/Update") 
	public @ResponseBody PRSMaintenanceReturn updateVendor (@RequestBody Vendor vendor) {
		
		try {
			vendorRepository.save(vendor);
			System.out.println("vendor updated: " + vendor);
		} catch (EmptyResultDataAccessException exc) {
			System.out.println("Vendor was NOT updated " + vendor);	
			vendor = null;
		}
		return PRSMaintenanceReturn.getMaintReturn(vendor);
	}
}
