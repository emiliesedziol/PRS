package prs.domain;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;

@Entity
public class PurchaseRequest {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private int userId;
	
	private String description;
	
	private String justification;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Timestamp dateNeeded;
	
	private String deliveryMode;
	
	private int statusId;
	@JsonInclude(JsonInclude.Include.NON_NULL)
	@Transient
	private String statusDesc;
	
	private double total;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Timestamp submittedDate;  // not entered  by the user
	
	private String reasonForRejection;
	
	@Column(name="IsActive")
	private boolean active;
	
	public PurchaseRequest(int id, int userId, String description, String justification, Timestamp dateNeeded,
			String deliveryMode, int statusId, double total, Timestamp submittedDate, String reasonForRejection,
			boolean active) {
		super();
		this.id = id;
		this.userId = userId;
		this.description = description;
		this.justification = justification;
		this.dateNeeded = dateNeeded;
		this.deliveryMode = deliveryMode;
		this.statusId = statusId;
		this.total = total;
		this.submittedDate = submittedDate;
		this.reasonForRejection = reasonForRejection;
		this.active = active;
	}


	public PurchaseRequest() {
		id = 0;
		userId = 0;
		description = "";
		justification = "";
		dateNeeded = new Timestamp(System.currentTimeMillis());
		deliveryMode = "";
		statusId = 0;
		total = 0.0;
		submittedDate = new Timestamp(System.currentTimeMillis());
		reasonForRejection = "";
		active = true;
		
	}
/*
	public PurchaseRequest(int conId, int conUserId, String conDescription, String conJustification, Timestamp conDateNeeded,
			String conDeliveryMode, int conStatusId, double conTotal, Timestamp conSubmittedDate) {
		id = conId;
		userId = conUserId;
		description = conDescription;
		justification = conJustification;
		dateNeeded = conDateNeeded;
		deliveryMode = conDeliveryMode;
		statusId = conStatusId;
		total = conTotal;
		submittedDate = conSubmittedDate;
	}  */

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getJustification() {
		return justification;
	}

	public void setJustification(String justification) {
		this.justification = justification;
	}

	public Timestamp getDateNeeded() {
		return dateNeeded;
	}

	public void setDateNeeded(Timestamp dateNeeded) {
		this.dateNeeded = dateNeeded;
	}

	public String getDeliveryMode() {
		return deliveryMode;
	}

	public void setDeliveryMode(String deliveryMode) {
		this.deliveryMode = deliveryMode;
	}

	public int getStatusId() {
		return statusId;
	}
	public void setStatusId(int statusId) {
		this.statusId = statusId;
	}
	public String getStatusDesc() {
		return statusDesc;
	}

	public void setStatusDesc(String statusDesc) {
		this.statusDesc = statusDesc;
	}
	
	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public Timestamp getSubmittedDate() {
		return submittedDate;
	}

	public void setSubmittedDate(Timestamp submittedDate) {
		this.submittedDate = submittedDate;
	}

	public String getReasonForRejection() {
		return reasonForRejection;
	}

	public void setReasonForRejection(String reasonForRejection) {
		this.reasonForRejection = reasonForRejection;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	@Override
	public String toString() {
		return "PurchaseRequest [id=" + id + ", userId=" + userId + ", description=" + description + ", justification="
				+ justification + ", dateNeeded=" + dateNeeded + ", deliveryMode=" + deliveryMode + ", statusId="
				+ statusId + ", total=" + total + ", submittedDate=" + submittedDate + "]";
	}
	

}
