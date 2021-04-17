package com.gale.mapper;

import com.gale.entity.Record;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface RecordMapper {
    @Insert("insert ignore into record (`user`, `datetime`, `detail`) values (#{user}, #{datetime}, #{detail})")
    void insertRecord(Record record);

    @Update("update record set `detail` = #{detail} where `user` = #{user} and `datetime` = #{datetime}")
    void updateDetail(@Param("user") String user, @Param("datetime") String datetime, @Param("detail") String detail);

    @Delete("delete from record where user = #{user} and datetime = #{datetime}")
    void deleteRecordByUserAndTime(@Param("user") String user, @Param("datetime") String datetime);

    @Select("select * from record where `user` = #{user} and `datetime` = #{datetime}")
    Record queryDetail(@Param("user") String user, @Param("datetime") String datetime);

    @Select("select * from record where `user` = #{user} and `datetime` >= #{startTime} and `datetime` <= #{endTime}")
    List<Record> queryWeekDetail(@Param("user") String user, @Param("startTime") String startTime, @Param("endTime") String endTime);
}
