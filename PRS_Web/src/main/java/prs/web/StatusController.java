package prs.web;

import java.util.ArrayList;
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

import prs.domain.Status;
import prs.domain.StatusRepository;

@CrossOrigin
@Controller
@RequestMapping(path="/Status")
public class StatusController  extends BaseController {

	@Autowired
	private StatusRepository statusRepository;
	
	@GetMapping(path="/List")
	public @ResponseBody Iterable<Status> getAllStatus() {
		return statusRepository.findAll();
	}
	
	@GetMapping(path="/Get") 
	public @ResponseBody List<Status> getStatus (@RequestParam int id) {
		ArrayList<Status> status = new ArrayList<Status>();
		Status s = statusRepository.findOne(id);
		if (s != null ) {
			status.add(s);
		}
		return getReturnArray(s);
		
		//
		// http://localhost:8080/Status/Get?id=3
		//
	}
	
	
	@PostMapping(path="/Add") // Map ONLY POST Requests
    public @ResponseBody Status addNewStatus (@RequestBody Status status) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
		// 
		// http://localhost:8080/Status/Add  - used in Postman
		//
        statusRepository.save(status);
        System.out.println("Status saved:  "+status);
        return status;
	}
}
