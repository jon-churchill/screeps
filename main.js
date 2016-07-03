var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleAttacker = require('role.attacker');
var roleRepairer = require('role.repairer');
var roleHealer = require('role.healer');
var roleClaimer = require('role.claimer');
var roleTower = require('role.tower');

module.exports.loop = function () 
{
    for(var name in Memory.creeps) 
    {
        if(!Game.creeps[name]) 
        {
            delete Memory.creeps[name];
        }
    }
    
    
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var healers = _.filter(Game.creeps, (creep) => creep.memory.role == 'healer');
    var attackers = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker');
    var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
    var claimers = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer');
    var towers = _.filter(Game.creeps, (creep) => creep.memory.role == 'tower');
    
    var tower = Game.getObjectById('576ff884587d021a3daf10cf');
    if(tower) 
    {
        
        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) 
        {
            tower.attack(closestHostile);
        }
       
        var target = tower.pos.findClosestByRange(FIND_MY_CREEPS, {filter: function(object) {return object.hits < object.hitsMax; }});
        if(target)
        {
            tower.heal(target);
        }
        
        // var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, 
        // {
        //     filter: (structure) => structure.hits < structure.hitsMax && structure.hits < 4800 &&  tower.energy > 500   
        //     // structure.hitsMax < 25001 &&
        // });
        // if(closestDamagedStructure) 
        // {
        //     tower.repair(closestDamagedStructure);
        // }

        
    }
    
    var tower2 = Game.getObjectById('5778694b554e26e003b36845');
    if(tower) 
    {
        
        var closestHostile = tower2.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) 
        {
            tower2.attack(closestHostile);
        }
       
        var target2 = tower2.pos.findClosestByRange(FIND_MY_CREEPS, {filter: function(object) {return object.hits < object.hitsMax; }});
        if(target)
        {
            tower2.heal(target2);
        }
        
        var closestDamagedStructure = tower2.pos.findClosestByRange(FIND_STRUCTURES, 
        {
            filter: (structure) => structure.hits < structure.hitsMax && structure.hits < 10000 &&  tower2.energy > 500   
            // structure.hitsMax < 25001 &&
        });
        if(closestDamagedStructure) 
        {
            tower2.repair(closestDamagedStructure);
        }

        
    }
    
    
    if(harvesters.length == 0) 
    {
        // 300
        var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,MOVE,CARRY], undefined, {role: 'harvester'});
        // console.log('Spawning new harvester: ' + newName);
    }

    
    if(harvesters.length < 3) 
    {
        // 850
        var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY], undefined, {role: 'harvester'});
        // console.log('Spawning new harvester: ' + newName);
    }
    
    if(towers.length < 2) 
    {
        // 900
        var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,CARRY], undefined, {role: 'tower'});
        // console.log('Spawning new harvester: ' + newName);
    }

    if(upgraders.length < 3)
    {
        // 1000
        var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,CARRY,CARRY], undefined, {role: 'upgrader'});
        // console.log('Spawning new upgrader: ' + newName);
    }
    
    
    if(builders.length < 2) 
    {
        // 950
        var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], undefined, {role: 'builder'});
        // console.log('Spawning new builder: ' + newName);
    }
        
   
    if(healers.length < 0) 
    {
        var newName = Game.spawns.Spawn1.createCreep([HEAL,HEAL,MOVE], undefined, {role: 'healer'});
        // console.log('Spawning new builder: ' + newName);
    }    
        
    
    if(attackers.length < 0) 
    {
        var newName = Game.spawns.Spawn1.createCreep([MOVE,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK], undefined, {role: 'attacker'});
        // console.log('Spawning new builder: ' + newName);
    }
    
    if(attackers.length < 0) 
    {
        var newName = Game.spawns.Spawn1.createCreep([MOVE,ATTACK,ATTACK,ATTACK], undefined, {role: 'attacker'});
        // console.log('Spawning new builder: ' + newName);
    }
    
    if(repairers.length < 0) 
    {
        // 950
        var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'repairer'});
        // console.log('Spawning new builder: ' + newName);
    }
    
    if(claimers.length < 0) 
    {
        // 1050
        var newName = Game.spawns.Spawn1.createCreep([CLAIM,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'claimer'});
        // console.log('Spawning new builder: ' + newName);
    }
    
    
    for(var name in Game.creeps) 
    {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') 
        {
            roleHarvester.run(creep);
        }
        
        if(creep.memory.role == 'upgrader') 
        {
            roleUpgrader.run(creep);
        }
        
        if(creep.memory.role == 'builder') 
        {
            roleBuilder.run(creep);
        }
        
        if(creep.memory.role == 'attacker') 
        {
            roleAttacker.run(creep);
        }
        
        if(creep.memory.role == 'healer') 
        {
            roleHealer.run(creep);
        }
        
        if(creep.memory.role == 'repairer') 
        {
            roleRepairer.run(creep);
        }
        
        if(creep.memory.role == 'claimer') 
        {
            roleClaimer.run(creep);
        }
        
        if(creep.memory.role == 'tower') 
        {
            roleTower.run(creep);
        }
    }
}
