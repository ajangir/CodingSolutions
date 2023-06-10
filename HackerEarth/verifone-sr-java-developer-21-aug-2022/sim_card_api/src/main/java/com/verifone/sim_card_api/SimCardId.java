package com.verifone.sim_card_api;

import java.util.Date;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class SimCardId
{
    @Id
    private long sim_card_no;

    @Column(name="mobile_no")
    private long mobile_no;

    @Column(name="curr_status")
    private String curr_status;

    @Column(name="expiry_date")
    private Date expiry_date;
    
    @Column(name="registration_state")
    private String registration_state;

    @Column(name="telecom_provider")
    private String telecom_provider;

    @Column(name="kyc")
    private boolean KYC;

    @Column(name="full_name")
    private String full_name;

    public SimCardId() {
    }

    public SimCardId(long mobile_no, long sim_card_no, String curr_status, Date expiry_date, String registration_state, String telecom_provider, boolean KYC, String full_name) {
        this.mobile_no = mobile_no;
        this.sim_card_no = sim_card_no;
        this.curr_status = curr_status;
        this.expiry_date = expiry_date;
        this.registration_state = registration_state;
        this.telecom_provider = telecom_provider;
        this.KYC = KYC;
        this.full_name = full_name;
    }

    public long getMobile_no() {
        return this.mobile_no;
    }

    public void setMobile_no(long mobile_no) {
        this.mobile_no = mobile_no;
    }

    public long getSim_card_no() {
        return this.sim_card_no;
    }

    public void setSim_card_no(long sim_card_no) {
        this.sim_card_no = sim_card_no;
    }

    public String getcurr_status() {
        return this.curr_status;
    }

    public void setcurr_status(String curr_status) {
        this.curr_status = curr_status;
    }

    public Date getExpiry_date() {
        return this.expiry_date;
    }

    public void setExpiry_date(Date expiry_date) {
        this.expiry_date = expiry_date;
    }

    public String getRegistration_state() {
        return this.registration_state;
    }

    public void setRegistration_state(String registration_state) {
        this.registration_state = registration_state;
    }

    public String getTelecom_provider() {
        return this.telecom_provider;
    }

    public void setTelecom_provider(String telecom_provider) {
        this.telecom_provider = telecom_provider;
    }

    public boolean isKYC() {
        return this.KYC;
    }

    public boolean getKYC() {
        return this.KYC;
    }

    public void setKYC(boolean KYC) {
        this.KYC = KYC;
    }

    public String getFull_name() {
        return this.full_name;
    }

    public void setFull_name(String full_name) {
        this.full_name = full_name;
    }

    public SimCardId mobile_no(long mobile_no) {
        setMobile_no(mobile_no);
        return this;
    }

    public SimCardId sim_card_no(long sim_card_no) {
        setSim_card_no(sim_card_no);
        return this;
    }

    public SimCardId curr_status(String curr_status) {
        setcurr_status(curr_status);
        return this;
    }

    public SimCardId expiry_date(Date expiry_date) {
        setExpiry_date(expiry_date);
        return this;
    }

    public SimCardId registration_state(String registration_state) {
        setRegistration_state(registration_state);
        return this;
    }

    public SimCardId telecom_provider(String telecom_provider) {
        setTelecom_provider(telecom_provider);
        return this;
    }

    public SimCardId KYC(boolean KYC) {
        setKYC(KYC);
        return this;
    }

    public SimCardId full_name(String full_name) {
        setFull_name(full_name);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof SimCardId)) {
            return false;
        }
        SimCardId simCardId = (SimCardId) o;
        return mobile_no == simCardId.mobile_no && sim_card_no == simCardId.sim_card_no && Objects.equals(curr_status, simCardId.curr_status) && Objects.equals(expiry_date, simCardId.expiry_date) && Objects.equals(registration_state, simCardId.registration_state) && Objects.equals(telecom_provider, simCardId.telecom_provider) && KYC == simCardId.KYC && Objects.equals(full_name, simCardId.full_name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(mobile_no, sim_card_no, curr_status, expiry_date, registration_state, telecom_provider, KYC, full_name);
    }

    @Override
    public String toString() {
        return "{" +
            " mobile_no='" + getMobile_no() + "'" +
            ", sim_card_no='" + getSim_card_no() + "'" +
            ", curr_status='" + getcurr_status() + "'" +
            ", expiry_date='" + getExpiry_date() + "'" +
            ", registration_state='" + getRegistration_state() + "'" +
            ", telecom_provider='" + getTelecom_provider() + "'" +
            ", KYC='" + isKYC() + "'" +
            ", full_name='" + getFull_name() + "'" +
            "}";
    }
}