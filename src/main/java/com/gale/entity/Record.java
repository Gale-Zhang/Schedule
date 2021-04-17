package com.gale.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class Record {
    private String user;
    private String datetime; //YYYYmmdd{1 for morning, 2 for afternoon, 3 for evening}
    private String detail;
    private Date createTime;
    private Date updateTime;

    public Record (String user, String datetime, String detail) {
        this.user = user;
        this.datetime = datetime;
        this.detail = detail;
    }
}
