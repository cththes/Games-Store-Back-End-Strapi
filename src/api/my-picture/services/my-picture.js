'use strict';

/**
 * my-picture service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-picture.my-picture');
