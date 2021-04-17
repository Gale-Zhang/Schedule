package com.gale.service.impl;

import com.gale.entity.Record;
import com.gale.mapper.RecordMapper;
import com.gale.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecordServiceImpl implements RecordService {
    @Autowired
    private RecordMapper recordMapper;

    private String encodeDatetime(String datetime) {
        String[] list = datetime.split("/");
        return list[0]+(list[1].length()==1? "0":"")+list[1]+(list[2].length()==1?"0":"")+list[2]+list[3];
    }

    private String decodeDatetime(String datetime) {
        StringBuilder res = new StringBuilder();
        res.append(datetime.substring(0, 4));
        res.append('/');
        if(datetime.charAt(4) == '0') {
            res.append(datetime.charAt(5));
        } else {
            res.append(datetime.substring(4,6));
        }
        res.append('/');
        if(datetime.charAt(6) == '0') {
            res.append(datetime.charAt(7));
        } else {
            res.append(datetime.substring(6,8));
        }
        res.append('/');
        res.append(datetime.charAt(8));
        return new String(res);
    }

    @Override
    public Record queryDetail(String user, String datetime) {
        Record record =recordMapper.queryDetail(user, encodeDatetime(datetime));
        record.setDatetime(decodeDatetime(record.getDatetime()));
        return recordMapper.queryDetail(user, encodeDatetime(datetime));
    }

    @Override
    public List<Record> queryDetail(String user, String startTime, String endTime) {
//        List<Record> list = recordMapper.queryWeekDetail(user, encodeDatetime(startTime), encodeDatetime(endTime));
//        for(Record record : list) {
//            record.setDatetime(decodeDatetime(record.getDatetime()));
//        }
//        return list;
        return recordMapper.queryWeekDetail(user, encodeDatetime(startTime), encodeDatetime(endTime));
    }

    @Override
    public void updateDetail(String user, String datetime, String detail) {
        recordMapper.updateDetail(user, encodeDatetime(datetime), detail);
    }

    @Override
    public void insertRecord(String user, String datetime, String detail) {
        recordMapper.insertRecord(new Record(user, encodeDatetime(datetime), detail));
    }
}
