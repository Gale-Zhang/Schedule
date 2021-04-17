package com.gale.controller;

import com.gale.entity.Record;
import com.gale.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/record")
public class RecordController {
    @Autowired
    private RecordService recordService;

    @RequestMapping("/post")
    public String insert(@RequestParam("user") String user, @RequestParam("datetime") String datetime, @RequestParam("detail") String detail) {
        if(datetime.length() < 10) {
            return "error";
        }
        recordService.insertRecord(user, datetime, detail);
        return "success";
    }

    @RequestMapping("/update")
    public String update(@RequestParam("user") String user, @RequestParam("datetime") String datetime, @RequestParam("detail") String detail) {
        if(datetime.length() < 10) {
            return "error";
        }
        recordService.updateDetail(user, datetime, detail);
        return "success";
    }

    @RequestMapping("/get/week")
    public List<Record> queryByWeek(@RequestParam("user") String user, @RequestParam("start_time") String startTime, @RequestParam("end_time") String endTime) {
        if(startTime.length() < 10 || endTime.length() < 10) {
            return null;
        }
        return recordService.queryDetail(user, startTime, endTime);
    }
}
