package com.szt.modules.generator.service.impl;

import com.mysql.jdbc.exceptions.MySQLSyntaxErrorException;
import com.szt.common.CommonServiceImpl;
import com.szt.common.exception.RRException;
import com.szt.common.utils.GenUtils;
import com.szt.modules.generator.config.InitBusConfig;
import com.szt.modules.generator.constant.GeneratorTableFieldConstant;
import com.szt.modules.generator.dao.GeneratorTableFieldDao;
import com.szt.modules.generator.entity.*;
import com.szt.modules.generator.service.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 字段管理
 *
 * @author liao
 * @email 1171964050@qq.com
 * @date 2018-06-13 12:52:07
 */
@Slf4j
@Service("generatorTableFieldService")
public class GeneratorTableFieldServiceImpl extends CommonServiceImpl<GeneratorTableFieldDao, GeneratorTableFieldEntity> implements GeneratorTableFieldService {
    @Autowired
    private GeneratorTableService generatorTableService;
    @Autowired
    private GeneratorTableFieldService generatorTableFieldService;
    @Autowired
    private GeneratorModulesService generatorModulesService;
    @Autowired
    private GeneratorTemplateConfigService generatorTemplateConfigService;
    @Override
    @Transactional
    public void hideTableField(List<Long> longs) {
        for (Long id : longs) {
            GeneratorTableFieldEntity entity = new GeneratorTableFieldEntity();
            entity.setId(id);
            entity.setTableSet(GeneratorTableFieldConstant.GENERATOR_TABLE_FIELD_TABLE_SET_1);
            this.updateEntity(entity);
        }
    }

    @Override
    @Transactional
    public void hideSetField(List<Long> longs) {
        for (Long id : longs) {
            GeneratorTableFieldEntity entity = new GeneratorTableFieldEntity();
            entity.setId(id);
            entity.setIsSet(GeneratorTableFieldConstant.GENERATOR_TABLE_FIELD_IS_SET_1);
            this.updateEntity(entity);
        }
    }

    @Override
    @Transactional
    public void showExportField(List<Long> longs) {
        for (Long id : longs) {
            GeneratorTableFieldEntity entity = new GeneratorTableFieldEntity();
            entity.setId(id);
            entity.setIsExport(GeneratorTableFieldConstant.GENTERATE_TABLE_FIELD_IS_EXPORT_0);
            this.updateEntity(entity);
        }
    }

    @Override
    @Transactional
    public void showSeekField(List<Long> longs) {
        for (Long id : longs) {
            GeneratorTableFieldEntity entity = new GeneratorTableFieldEntity();
            entity.setId(id);
            entity.setIsSeek(GeneratorTableFieldConstant.GENTERATE_TABLE_FIELD_IS_SEEK_0);
            this.updateEntity(entity);
        }
    }

    @Override
    @Transactional(rollbackFor={Exception.class,MySQLSyntaxErrorException.class})
    public void insertEntity(GeneratorTableFieldEntity generatorTableField) {
        GeneratorTableEntity tab = generatorTableService.selectById(generatorTableField.getTableId());
        if (tab == null) {
            throw new RRException("您的表不存在");
        }

        generatorTableField.setDataType(InitBusConfig.getFieldType().getMap().get(generatorTableField.getFieldType()));
        //插入字段数据
        generatorTableField.setTabName(tab.getTableName());
        generatorTableField.setDictionaryIndex(tab.getTableName()+"_"+generatorTableField.getFieldName());
        generatorTableField.insert();
        //判断是否为数据库字段,增加到数据库
        if (GeneratorTableFieldConstant.GENERATOR_TABLE_FIELD_IS_DATA_BASE_0.equals(generatorTableField.getIsDataBase())) {
            try{
                baseMapper.addField(generatorTableField);
            }catch (Exception e){
                e.printStackTrace();
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
                throw new RRException("保存失败!");
            }

        }
        //查询列信息
        List<GeneratorTableFieldEntity> columns =new ArrayList<>();
        columns.add(generatorTableField);
        tab.setColumns(columns);
        List<ColumnListEntity> lists = new ArrayList<ColumnListEntity>();
        Map<String, GeneratorTemplateConfigEntity> config  = generatorTemplateConfigService.queryGeneratorTemplateConfig();
        Map<String,Boolean> obj = new HashMap<>();
        GenUtils.parseTableField(generatorTableField,tab,lists,obj,false,config);
        generatorModulesService.insertTableField(generatorTableField,1,tab);
    }

    @Override
    @Transactional
    public void deleteFields(List<Long> longs) {
        for (Long lo : longs) {
            //查询字段信息
            GeneratorTableFieldEntity generatorTableField = generatorTableFieldService.selectById(lo);
            //查询表信息
            GeneratorTableEntity tab = generatorTableService.selectById(generatorTableField.getTableId());
            if (tab == null) {
                throw new RRException("您的表不存在");
            }
            generatorTableField.setTabName(tab.getTableName());
            //判断是否为数据库字段
            if (GeneratorTableFieldConstant.GENERATOR_TABLE_FIELD_IS_DATA_BASE_0.equals(generatorTableField.getIsDataBase())) {
                baseMapper.deleteFields(generatorTableField);
            }
        }
        baseMapper.deleteBatchIds(longs);

    }

    @Override
    public void tabFieldIndexReload() {
        baseMapper.tabFieldIndexReload();
    }

    @Override
    @Transactional
    public void tabFieldTypeReload() {
        List<GeneratorTableFieldEntity> list = baseMapper.selectList(null);
        for(GeneratorTableFieldEntity item : list){
            try{
                //判断是否为数字
                Integer.parseInt(item.getFieldType());
            }catch (Exception e){
                List<GeneratorBusConfigEntity> types = InitBusConfig.getFieldType().getList();
                for(GeneratorBusConfigEntity type : types){
                    if(type.getConfName().equals(item.getFieldType())){
                        item.setFieldType(type.getConfVue());
                        baseMapper.updateById(item);
                        break;
                    }
                }
            }

        }
    }
    @Override
    public void updateEntity(GeneratorTableFieldEntity entity){
        entity.update();
        baseMapper.updateById(entity);

        InitBusConfig.updateTabConfig(generatorTableService.selectById(baseMapper.selectById(entity).getTableId()).getTableName());
    }
}
