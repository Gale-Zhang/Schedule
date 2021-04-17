package com.gale.service;

import com.gale.entity.Record;

import java.util.List;

public interface RecordService {
    Record queryDetail(String user, String datetime);
    List<Record> queryDetail(String user, String startTime, String endTime);
    void updateDetail(String user, String datetime, String detail);
    void insertRecord(String user, String datetime, String detail);
}
