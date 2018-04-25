package prs.web;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import prs.domain.PurchaseRequestLineItemRepository;
import prs.domain.PurchaseRequestRepository;
import prs.domain.Product;
import prs.domain.ProductRepository;
import prs.domain.PurchaseRequest;
import prs.domain.PurchaseRequestLineItem;
import prs.util.PRSMaintenanceReturn;

@CrossOrigin
@Controller
@RequestMapping(path="/PRLI")

public class PurchaseRequestLineItemController extends BaseController {

	@Autowired
	private PurchaseRequestLineItemRepository prliRepository;
	@Autowired
	private PurchaseRequestRepository prRepository;
	@Autowired
	private ProductRepository prodRepository;
	
	@GetMapping(path="/List")
	public @ResponseBody Iterable<PurchaseRequestLineItem> getAllLineItems() {
		// This returns a JSON or XML with the purchase request line items
		return prliRepository.findAll();
	}
	
	@GetMapping(path="/Get") 
	public @ResponseBody List<PurchaseRequestLineItem> getPurchaseRequestLineItem (@RequestParam int id) {
		PurchaseRequestLineItem prli = prliRepository.findOne(id);
		return getReturnArray(prli);

	}
 
	@PostMapping(path="/Add")
	public @ResponseBody PRSMaintenanceReturn addNewPurchaseRequestLineItem (@RequestBody PurchaseRequestLineItem prli,
			HttpServletRequest req) {
		String msg = "";
		PRSMaintenanceReturn ret;
		try {
			System.out.println("Trying to save prli: "+prli.toString());
			prliRepository.save(prli);
			System.out.println("PurchaseRequestLineItem added:  "+prli);
			ret = PRSMaintenanceReturn.getMaintReturn(prli);
			// now update the PR total
			updateRequestTotal(prli);
		}
		catch (Exception e) {
			e.printStackTrace();
			msg = e.getMessage();
			prli = null;
			ret = PRSMaintenanceReturn.getMaintReturn(null,msg);
		}
		return ret;
	}
	
	@GetMapping(path="/Delete") // Map ONLY GET Requests
	public @ResponseBody PRSMaintenanceReturn deletePurchaseRequestLineItem (@RequestParam int id) {
		PurchaseRequestLineItem prli = prliRepository.findOne(id);
		try {
			prliRepository.delete(prli);
			System.out.println("PurchaseRequestLineItem removed:  "+prli);
			// now update the PR total
			updateRequestTotal(prli);
		}
		catch (Exception e) {
			prli = null;
		}
		return PRSMaintenanceReturn.getMaintReturn(prli);
	}
	
	@GetMapping(path="/LinesForPR")
	   public @ResponseBody Iterable<PurchaseRequestLineItem> getAllLineItemsForPR(@RequestParam int id) {
	       // This returns a JSON or XML with the purchase request line items
		// http://localhost:8080/PRLI/LinesForPR?id=12
	       return prliRepository.findAllByPurchaseRequestId(id);
	   }
	
	private void updateRequestTotal(PurchaseRequestLineItem prli) throws Exception {
		PurchaseRequest pr = prRepository.findOne(prli.getPurchaseRequestId());
		List<PurchaseRequestLineItem> lines = new ArrayList<>();
		lines = prliRepository.findAllByPurchaseRequestId(pr.getId());
		double total = 0;
		for (PurchaseRequestLineItem line: lines) {
			Product p = prodRepository.findOne(line.getProductId());
			double lineTotal = line.getQuantity()*p.getPrice();
			total += lineTotal;
		}
		pr.setTotal(total);
		prRepository.save(pr);
	}

}
