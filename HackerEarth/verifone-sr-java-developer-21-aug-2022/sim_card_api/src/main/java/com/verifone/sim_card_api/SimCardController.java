package com.verifone.sim_card_api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class SimCardController 
{
    @RequestMapping(method=RequestMethod.GET,path="/")
    public String helloWorld()
    {
        return "Hello Worlfg";
    }
}
