package prs.web;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import prs.util.PRSMaintenanceReturn;
import prs.domain.PurchaseRequestRepository;
import prs.domain.PurchaseRequest;
import prs.domain.PurchaseRequestLineItem;
import prs.domain.PurchaseRequestLineItemRepository;

@CrossOrigin
@Controller
@RequestMapping(path="/PR")
public class PurchaseRequestController extends BaseController {

	@Autowired
	private PurchaseRequestRepository purchaserequestRepository;
	
//	@Autowired
//	private PurchaseRequestLineItemRepository purchaseRequestLineItemRepository;

	@GetMapping(path="/Get") 
	public @ResponseBody List<PurchaseRequest> getPurchaseRequest (@RequestParam int id) {
		PurchaseRequest pr = purchaserequestRepository.findOne(id);
		return getReturnArray(pr);
	}
	
	@GetMapping(path="/PRList") 
	public @ResponseBody Iterable<PurchaseRequest> getPurchaseRequestnotinclUser (@RequestParam int id) {
		// the following will pull all PR's not entered by user 1
		// http://localhost:8080/PR/PRList?id=1
		Iterable<PurchaseRequest> PRUsers = purchaserequestRepository.findByUserIdNot(id);
		return PRUsers;
	}
	
	@GetMapping(path="/List")
	public @ResponseBody Iterable<PurchaseRequest> getAllPurchaseRequests() {
		// This returns a JSON or XML with the purchaserequests
		Iterable<PurchaseRequest> allPRs = purchaserequestRepository.findAll();
		return allPRs;
	}
	
	@PostMapping(path="/Add")
	public @ResponseBody PRSMaintenanceReturn addNewPurchaseRequest (@RequestBody PurchaseRequest purchaseRequest) {
		Timestamp ts = new Timestamp(System.currentTimeMillis());
		//Defaulting submittedDate to current date.  Will be reset once line items are finalized.
		purchaseRequest.setSubmittedDate(ts);
		try {
			purchaserequestRepository.save(purchaseRequest);
			System.out.println("PurchaseRequest saved:  "+purchaseRequest);
		}
		catch (Exception e) {
			purchaseRequest = null;
		}
		System.out.println("PurchaseRequest saved:  "+purchaseRequest);
		return PRSMaintenanceReturn.getMaintReturn(purchaseRequest);
	}
	
	@PostMapping(path="/Update") 
	public @ResponseBody PRSMaintenanceReturn updatePurchaseRequest (@RequestBody PurchaseRequest purchaseRequest) {
		try {
			purchaserequestRepository.save(purchaseRequest);
			System.out.println("PurchaseRequest updated:  "+purchaseRequest);
		}
		catch (Exception e) {
			purchaseRequest = null;
		}
		
		return PRSMaintenanceReturn.getMaintReturn(purchaseRequest);
	}

	@GetMapping(path="/Remove") 
	public @ResponseBody PRSMaintenanceReturn deletePurchaseRequest (@RequestParam int id) {
		PurchaseRequest purchaseRequest = purchaserequestRepository.findOne(id);
		try {
			purchaserequestRepository.delete(purchaseRequest);
			System.out.println("PurchaseRequest saved:  "+purchaseRequest);
		}
		catch (Exception e) {
			purchaseRequest = null;
		}
		return PRSMaintenanceReturn.getMaintReturn(purchaseRequest);
	}

	private List<PurchaseRequestLineItem> findAllByPurchaseRequestId(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
