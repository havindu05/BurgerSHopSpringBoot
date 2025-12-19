package edu.icet.service;

import edu.icet.model.entity.Item;
import edu.icet.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    @Autowired
    ItemRepository itemRepository;

    public Item save(Item item) {
        return itemRepository.save(item);
    }

    public List<Item> getItems() {
       return itemRepository.findAll();
    }

    public void delete(String code) {
        itemRepository.deleteById(code);
    }
}
