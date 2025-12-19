package edu.icet.controller;

import edu.icet.model.entity.Customer;
import edu.icet.model.entity.Item;
import edu.icet.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/items")
public class ItemController {

    @Autowired
    ItemService itemService;

    @PostMapping("/save")
    public Item save(@RequestBody Item item){
        return itemService.save(item);
    }

    @GetMapping("/all")
    public List<Item> getItems(){
        return itemService.getItems();
    }

    @DeleteMapping("/{code}")
    public void delete(@PathVariable String code){
        itemService.delete(code);
    }

}
