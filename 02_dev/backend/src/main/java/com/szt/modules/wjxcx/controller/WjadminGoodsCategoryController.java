package com.szt.modules.wjxcx.controller;

import java.util.Arrays;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.szt.common.validator.ValidatorUtils;
import com.szt.modules.wjadmin.entity.WjadminGoodsCategoryEntity;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
//import com.szt.modules.wjxcx.entity.WjadminGoodsCategoryEntity;
import com.szt.modules.wjxcx.service.WjadminGoodsCategoryService;
import com.szt.common.utils.PageUtils;
import com.szt.common.utils.R;
import com.szt.common.annotation.SysLog;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
/**
 * 商品分类管理
 *
 * @author liao
 * @email 1171964050@qq.com
 * @date 2018-08-21 14:58:55
 */
@Slf4j
@Api(value = "商商品分类管理接口", tags = "商品分类管理接口")
@RestController
@RequestMapping("wjxcx/wjadmingoodscategory")
@Controller("wjxcxwjadmingoodscategory")
public class WjadminGoodsCategoryController {
    @Autowired
    private WjadminGoodsCategoryService wjadminGoodsCategoryService;

    /**
     * 列表
     */
    @ApiOperation("列表")
    @GetMapping("/list")
    public R list() {
        List<WjadminGoodsCategoryEntity> list = wjadminGoodsCategoryService.selectList(null);
        WjadminGoodsCategoryEntity en = new WjadminGoodsCategoryEntity();
        en.setName("全部商品");
        en.setId(0L);
        list.add(0,en);
        return R.ok().put("data", list);
    }


    /**
     * 信息
     */
    @ApiOperation("信息")
    @GetMapping("/info/{id}")
    @RequiresPermissions("wjxcx:wjadmingoodscategory:info")
    public R info(@PathVariable("id") Long id) {
            WjadminGoodsCategoryEntity wjadminGoodsCategory = wjadminGoodsCategoryService.selectById(id);

        return R.ok().put("data", wjadminGoodsCategory);
    }

    /**
     * 保存
     */
    @SysLog("保存信息")
    @ApiOperation("保存")
    @PostMapping("/save")
    @RequiresPermissions("wjxcx:wjadmingoodscategory:save")
    public R save(@RequestBody WjadminGoodsCategoryEntity wjadminGoodsCategory) {
            wjadminGoodsCategoryService.insertEntity(wjadminGoodsCategory);
        return R.ok();
    }
    /**
     * 批量保存
     */
    @SysLog("批量保存信息")
    @ApiOperation("批量保存")
    @PostMapping("/saveAll")
    @RequiresPermissions("wjxcx:wjadmingoodscategory:save")
    public R save(@RequestBody List<WjadminGoodsCategoryEntity> wjadminGoodsCategory) {
            wjadminGoodsCategoryService.saveAll(wjadminGoodsCategory);
        return R.ok();
    }
    /**
     * 修改
     */
    @SysLog("修改信息")
    @ApiOperation("修改")
    @PostMapping("/update")
    @RequiresPermissions("wjxcx:wjadmingoodscategory:update")
    public R update(@RequestBody WjadminGoodsCategoryEntity wjadminGoodsCategory) {
            wjadminGoodsCategory.update();
            //校验类型
             ValidatorUtils.validateEntity(wjadminGoodsCategory);
            wjadminGoodsCategoryService.updateById(wjadminGoodsCategory);

        return R.ok();
    }

    /**
     * 删除
     */
    @SysLog("删除信息")
    @ApiOperation("删除")
    @PostMapping("/delete")
    @RequiresPermissions("wjxcx:wjadmingoodscategory:delete")
    public R delete(@RequestBody Long[]ids) {
            wjadminGoodsCategoryService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }

}
